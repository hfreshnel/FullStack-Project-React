import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import {
  joinQuiz,
  commencerQuiz,
  afficherQuestionSuivante,
  afficherStatistique,
  afficherClassement,
  afficherReponse,
  endQuiz,
} from './quizSocketFunction.js';

const socket = io(import.meta.env.VITE_API_URL);

const DeroulementDuQuiz = () => {
  const { idQuiz } = useParams();
  const [quizId, setQuizId] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionIds, setQuestionIds] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);
  const [message, setMessage] = useState('');
  const [statistique, setStatistique] = useState(null);
  const [classement, setClassement] = useState(null);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showStatistique, setShowStatistique] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showClassement, setShowClassement] = useState(false);

  // Gestion des événements Socket.IO
  useEffect(() => {
    console.log('Quiz ID: ', idQuiz);
    joinQuiz(socket, setQuizId, idQuiz);
    setQuizId(idQuiz);

    // Charger les IDs des questions et démarrer le quiz
    if (idQuiz) {
      fetchQuestionIds(idQuiz).then(response => {
        if (response.code === 200) {
          setQuestionIds(response.data.data); // Utilise 'data' pour les IDs des questions
        } else {
          console.error('Erreur:', response.error);
        }
      });
    }

    socket.on('joinedQuiz', data => {
      setMessage(data.message);
    });

    socket.on('quizStarted', data => {
      setCurrentQuestion(data.data);
      setShowQuestion(true);
      setShowClassement(false);
      setQuizEnded(false);
      setShowStatistique(false);
      setShowCorrectAnswer(false);
    });

    socket.on('nextQuestion', data => {
      setCurrentQuestion(data.data);
      setShowQuestion(true);
      setShowClassement(false);
      setQuizEnded(false);
      setShowStatistique(false);
      setShowCorrectAnswer(false);
    });

    socket.on('showStatistique', data => {
      setStatistique(data.data);
      setShowQuestion(false);
      setShowClassement(false);
      setQuizEnded(false);
      setShowStatistique(true);
      setShowCorrectAnswer(false);
    });

    socket.on('showClassement', data => {
      setStatistique(data.data);
      setShowQuestion(false);
      setShowClassement(true);
      setQuizEnded(false);
      setShowStatistique(false);
      setShowCorrectAnswer(false);
    });

    socket.on('quizEnded', () => {
      setQuizEnded(true);
      setShowQuestion(false);
      setShowClassement(false);
      setShowStatistique(false);
      setShowCorrectAnswer(false); // Lorsque l'événement quizEnded est reçu, on met quizEnded à true
    });

    socket.on('showAnswer', () => {
      setShowCorrectAnswer(true);
    });

    return () => {
      socket.off('joinedQuiz');
      socket.off('quizStarted');
      socket.off('nextQuestion');
      socket.off('showAnswer');
      socket.off('showStatistique');
      socket.off('quizEnded');
    };
  }, [idQuiz, quizId]);

  useEffect(() => {
    if (questionIds && questionIds.length > 0) {
      commencerQuiz(
        socket,
        quizId,
        questionIds,
        setCurrentQuestion,
        currentQuestion,
        setCurrentQuestionId,
      );
    }
  }, [questionIds, quizId]);

  return (
    <div>
      <h1>Bienvenue sur le Quizz</h1>

      {quizId && (
        <div>
          <h2>Contrôle du Quiz</h2>

          {showQuestion && currentQuestion && (
            <Question
              question={currentQuestion}
              showCorrectAnswer={showCorrectAnswer}
            />
          )}

          {showStatistique && (
            <div>
              <h3>Statistiques</h3>
              <p>{message}</p>
              <LineBarChart statistics={statistique} />
            </div>
          )}

          {showClassement && (
            <div>
              <h3>Classement</h3>
              <Classement rankingData={classement} />
            </div>
          )}

          {quizEnded && <FinDuQuizs />}

          <button
            onClick={() =>
              afficherQuestionSuivante(
                socket,
                quizId,
                currentQuestionId,
                questionIds,
                setCurrentQuestion,
                setCurrentQuestionId,
                setShowCorrectAnswer,
              )
            }
          >
            {' '}
            Question Suivante
          </button>
          <button
            onClick={() =>
              afficherReponse(socket, quizId, setShowCorrectAnswer)
            }
          >
            Afficher Réponse
          </button>
          <button
            onClick={() =>
              endQuiz(socket, quizId, setQuizEnded, setShowStatistique)
            }
          >
            Terminer le Quiz
          </button>
          <button
            onClick={() =>
              afficherStatistique(
                socket,
                quizId,
                setStatistique,
                currentQuestionId,
                setMessage,
              )
            }
          >
            Voir Statistiques
          </button>
          <button
            onClick={() =>
              afficherClassement(socket, quizId, setClassement, setMessage)
            }
          >
            Voir Classement
          </button>
        </div>
      )}
    </div>
  );
};
