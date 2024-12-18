import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import MainCard from '../../../../common/components/main-card/MainCard.tsx';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import IconButton from '../../../../common/components/icon-button/IconButton.tsx';
import { faXmark , faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Color } from '../../../../common/enums/Color.ts';
import './QuestionListContainer.css';
import { isWhiteSpaceLike } from 'typescript';
import { Size } from '../../../../common/enums/Size.ts';
interface Question {
  id: number;
  libelle: string;
}

interface Quiz {
  id: number;
  libelle: string;
  questions: Question[];
}

const QuestionListContainer = () => {
  const { id } = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const isAdmin = true; // Variable pour définir si l'utilisateur est admin

  useEffect(() => {
    fetch("/mocks/quizMock.json")
      .then((response) => response.json())
      .then((data) => {
        const quizFound = data.quizzes.find((quiz: Quiz) => quiz.id === Number(id));
        setQuiz(quizFound || null);
      })
      .catch((error) => console.error('Erreur de chargement des données :', error));
  }, [id]);

  if (!quiz) {
    return (
      <div className="question-list-container">
        <MainMenu />
        <p>Aucun quiz trouvé pour l'ID : {id}</p>
      </div>
    );
  }

  return (
    <div className="question-list-container">
      <MainMenu />
  
      {/* Section principale */}
      <div className="main-content">
        {/* Titre placé au-dessus */}
        <div className="quiz-title-section">
          <h1 className="quiz-title">{quiz.libelle}</h1>
          
          {/* IconButton visible seulement si isAdmin est true */}
          {isAdmin && (
            <IconButton
              icon={faPenToSquare}
              bgColor={Color.SECONDARY_WHITE}
              iconColor={Color.YELLOW}
              btnSize={Size.LARGE}
            />
          )}
        </div>
  
        {/* Section Contenu */}
        <div className="content">
          <div className="questions-list">
            {quiz.questions.map((question) => (
              <div key={question.id} className={`bar-container ${isAdmin ? "" : "full-width"}`}>
                <Link to={`/list/answer/${question.id}`} className={`bar ${isAdmin ? "" : "no-icon"}`}>
                  <TextButton label={question.libelle} textColor={Color.WHITE} bgColor={Color.BLUE} />
                </Link>
                {/* Icône de suppression visible seulement si isAdmin est true */}
                {isAdmin && (
                  <Link to={`/questionDelete/${question.id}`} className="delete-icon">
                    <IconButton
                      icon={faXmark}
                      bgColor={Color.RED}
                      iconColor={Color.WHITE}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
  
        {/* Bouton Ajouter une question visible seulement si isAdmin est true */}
        {isAdmin && (
          <TextButton
            label="Ajouter une question"
            borderColor={Color.BLUE}
            bgColor={Color.WHITE}
            textColor={Color.BLUE}
            className="add-question"
          />
        )}
      </div>
    </div>
  );
  
  
};

export default QuestionListContainer;