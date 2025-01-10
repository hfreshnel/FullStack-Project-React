import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './QuestionListContainer.css';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import MainCard from '../../../../common/components/main-card/MainCard.tsx';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import { Size } from '../../../../common/enums/Size.ts';
import IconButton from '../../../../common/components/icon-button/IconButton.tsx';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface Proposition {
  id: number;
  correct: number;
  libelle: string;
}

interface Question {
  id: number;
  libelle: string;
  propositions: Proposition[];
}

interface Quiz {
  id: number;
  libelle: string;
  questions: Question[];
}

const isAdmin = true;

const QuestionListContainer = () => {
  const { id } = useParams<{ id: string }>(); // Récupérer l'ID du quiz depuis l'URL
  const [quiz, setQuiz] = useState<Quiz | null>(null); // État pour stocker le quiz sélectionné
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs de chargement
  const [isLoading, setIsLoading] = useState(true); // État pour afficher un indicateur de chargement

  useEffect(() => {
    const fetchQuizData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://10.3.70.13:8080/public/quiz`, {
          method: 'GET',
          headers: {
            Accept: '*/*',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjowLCJpYXQiOjE3MzY1MDE3NDMsImV4cCI6MTczNjU4ODE0M30.fU9Isa6eA2ZuncZg0D4TY8OJrsNiY7bBye_laQVgGRY',
          },
        });

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données.');
        }

        const data = await response.json();
        if (data && data.data) {
          setQuiz({
            id: data.data.id,
            libelle: data.data.libelle,
            questions: data.data.questions,
          });
        } else {
          setQuiz(null);
          setError('Aucun quiz trouvé.');
        }
      } catch (err) {
        console.error(err);
        setError('Une erreur est survenue lors du chargement du quiz.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizData();
  }, [id]);

  return (
    <div className={'question-list-container'}>
      <MainMenu />
      <div className={'question-list-container-content'}>
        {isLoading ? (
          <p>Chargement...</p>
        ) : error ? (
          <p>{error}</p>
        ) : quiz ? (
          <>
            <div className='quiz-title-container'>
              <MainCard
                label={quiz.libelle}
                cardSize={Size.LARGE}
                textColor={Color.BLUE}
              />
            </div>
            {/* Liste des questions */}
            <div className='questions-list'>
              {quiz.questions.map(question => (
                <div key={question.id} className='bar-container'>
                  <div className='bar-row'>
                    <Link to={`/list/answer/${question.id}`} className='bar'>
                      <TextButton
                        label={question.libelle}
                        textColor={Color.WHITE}
                        bgColor={Color.BLUE}
                      />
                    </Link>
                    {isAdmin && (
                      <IconButton
                        icon={faXmark}
                        bgColor={Color.RED}
                        iconColor={Color.WHITE}
                        tooltip={'Supprimer question'}
                        className={'delete-button'}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Aucun quiz trouvé pour l'ID : {id}</p>
        )}
      </div>
    </div>
  );
};

export default QuestionListContainer;
