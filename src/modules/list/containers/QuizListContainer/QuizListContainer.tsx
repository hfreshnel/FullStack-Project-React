import React, { useEffect, useState } from 'react';
import './QuizListContainer.css';
import { QuizEtatEnum } from '../../../../common/enums/QuizEtatEnum';
import { EtapeEnum } from '../../../../common/enums/EtapeEnum';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import IconButton from '../../../../common/components/icon-button/IconButton.tsx';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';

const getButtonLabel = (etat: number): string => {
  switch (etat) {
    case 0:
      return 'Pas lancé';
    case 10:
      return 'Rejoindre';
    case 20:
      return 'Résultats';
    default:
      return 'Indéfini';
  }
};

// Fonction pour récupérer la couleur du bouton d'état
const getButtonColor = (etat: number): Color => {
  switch (etat) {
    case 0:
      return Color.GREY;
    case 10:
      return Color.ORANGE;
    case 20:
      return Color.GREEN;
    default:
      return Color.GREY;
  }
};

const QuizListContainer: React.FC = () => {
  const [quiz, setQuiz] = useState<any | null>(null); // État pour stocker le quiz sélectionné
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs de chargement
  const [isLoading, setIsLoading] = useState(true); // État pour afficher un indicateur de chargement

  const quizList = [
    {
      id: 1,
      libelle: 'Quiz 1',
      etat: QuizEtatEnum.PENDING,
      dateDebutQuiz: new Date('2023-12-01T10:00:00'),
      noQuestionCourante: 2,
      etape: EtapeEnum.SHOW_QUESTION,
      dateDebutQuestion: new Date('2023-12-01T10:05:00'),
      questions: [],
    },
    {
      id: 2,
      libelle: 'Quiz 2',
      etat: QuizEtatEnum.DONE,
      dateDebutQuiz: new Date('2023-11-20T15:00:00'),
      noQuestionCourante: 0,
      etape: EtapeEnum.SHOW_STATS,
      dateDebutQuestion: new Date('2023-11-20T15:30:00'),
      questions: [],
    },
    {
      id: 3,
      libelle: 'Quiz 3',
      etat: QuizEtatEnum.INACTIVE,
      dateDebutQuiz: new Date('2023-12-05T14:00:00'),
      noQuestionCourante: 0,
      etape: EtapeEnum.SHOW_ANSWERS,
      dateDebutQuestion: new Date('2023-12-05T14:00:00'),
      questions: [],
    },
  ];

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

        console.log(response);

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données.');
        }

        const data = await response.json();
        if (data && data.data) {
          console.log(data.data);
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
  }, []);

  return (
    <>
      <MainMenu />
      <div className='quiz-list-title-container'>
        <h1 className='quiz-list-title'>Liste des Quiz</h1>
        <div className='quiz-list-container'>
          {quizList.map((quiz, id) => (
            <div className={'question-container'} key={'question-' + id}>
              <Link
                to={'/list/questions/' + quiz.id}
                className={'quiz-link-to-create quiz-item'}
                key={quiz.id}
              >
                <TextButton
                  label={getButtonLabel(quiz.etat)}
                  bgColor={getButtonColor(quiz.etat)}
                  textColor={Color.WHITE}
                  className='quiz-item-button quiz-item-button-state'
                />
              </Link>
              <Link
                to={'/live'}
                className={'go-to-live-button'}
                key={'go-to-live-' + quiz.id}
              >
                <IconButton
                  icon={faCaretRight}
                  bgColor={Color.TRANSPARENT}
                  iconColor={Color.GREEN}
                  borderColor={Color.TRANSPARENT}
                  tooltip={'Démarrer le quiz'}
                  className={'quiz-item-icon'}
                />
              </Link>
            </div>
          ))}
        </div>
        <Link to={'/create/quiz'} className={'quiz-link-to-create'}>
          <TextButton
            label='Créer un nouveau quiz'
            bgColor={Color.WHITE}
            textColor={Color.BLUE}
            borderColor={Color.BLUE}
          />
        </Link>
      </div>
    </>
  );
};

export default QuizListContainer;
