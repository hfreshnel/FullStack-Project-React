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
import { IQuizEntity } from '../../../../common/entities/IQuizEntity.ts';

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
  const [quiz, setQuiz] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuizData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + `/public/quiz`,
          {
            method: 'GET',
            headers: {
              Accept: '*/*',

              Authorization: 'Bearer ' + localStorage.getItem('authToken'),

            },
          },
        );

        console.log(response);

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données.');
        }

        const data = await response.json();
        if (data && data.data) {
          console.log(data.data);
          setQuiz(data.data);
          console.log(quiz);
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
          {quiz &&
            quiz.map((quiz: IQuizEntity, id: number) => (
              <div className={'question-container'} key={'question-' + id}>
                <Link
                  to={'/list/questions/' + quiz.id}
                  className={'quiz-link-to-create quiz-item'}
                  key={quiz.id}
                >
                  <TextButton
                    label={quiz.libelle}
                    bgColor={getButtonColor(quiz.etat)}
                    textColor={Color.WHITE}
                    className='quiz-item-button quiz-item-button-state'
                  />
                </Link>
                <Link
                  to={'http://10.3.70.5:3000/Deroulement1/' + quiz.id}
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
