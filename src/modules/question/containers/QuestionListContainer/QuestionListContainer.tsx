import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './QuestionListContainer.css';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import MainCard from '../../../../common/components/main-card/MainCard.tsx';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import { Size } from '../../../../common/enums/Size.ts';
import { Link } from 'react-router-dom';
import IconButton from '../../../../common/components/icon-button/IconButton.tsx';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface Question {
  id: number;
  libelle: string;
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

  useEffect(() => {
    // Charger les données mockées
    fetch("/mocks/quizMock.json")
      .then((response) => response.json())
      .then((data) => {
        // Trouver le quiz correspondant dans la liste
        const quizFound = data.quizzes.find((quiz: Quiz) => quiz.id === Number(id));
        if (quizFound) {
          setQuiz(quizFound);
        } else {
          setQuiz(null);
        }
      })
      .catch((error) => console.error('Erreur de chargement du mock :', error));
  }, [id]);

  return (
    <div className={'question-list-container'}>
      <MainMenu />
      <div className={'question-list-container-content'}>
        {quiz ? (
          <>
            {/* Affichage du titre du quiz */}
            <div className='quiz-title-container'>
              <MainCard
                label={quiz.libelle}
                cardSize={Size.LARGE}
                textColor={Color.BLUE}
              />
            </div>
            {/* Liste des questions */}
            <div className="questions-list">
              {quiz.questions.map((question) => (
                <div key={question.id} className="bar-container">
                  <div className="bar-row">
  <Link to={`/list/answer/${question.id}`} className="bar">
    <TextButton
      label={question.libelle}
      textColor={Color.WHITE}
      bgColor={Color.BLUE}
    />
  </Link>
  {isAdmin && (
    <Link to={`/questionDelete/${question.id}`} className="delete-icon">
      <IconButton
        icon={faXmark}
        bgColor={Color.RED}
        iconColor={Color.WHITE}
        tooltip={"Supprimer question"}
        className={"delete-button"}
      />
    </Link>
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
