import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '../../../../common/components/icon-button/IconButton.tsx';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { useQuizContext } from '../../../../common/contexts/QuizContext/QuizContext.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import { LoadingStateEnum } from '../../../../common/enums/LoadingStateEnum.ts';
import useFetchData from '../../../../common/hooks/useFetchData.tsx';
import useQuizRepository from '../../../../common/repositories/quiz/useQuizRepository.tsx';
import './QuizListContainer.css';

const QuizListContainer: React.FC = () => {
  const navigate = useNavigate();
  const isAdmin = true;

  const { allQuizzes } = useQuizContext();
  const { RfindAllQuiz } = useQuizRepository({});
  const { fetchData, error, loadingState } = useFetchData({});

  const handleFindAllQuiz = async () => {
    await fetchData(RfindAllQuiz, {});
  };

  useEffect(() => {
    !allQuizzes && handleFindAllQuiz();
  }, []);

  return allQuizzes ? (
    <>
      <MainMenu />
      <div className='quiz-list-title-container'>
        <h1 className='quiz-list-title'>Liste des Quiz</h1>
        <div className='quiz-list-container'>
          {allQuizzes.map(quiz => (
            <Link
              to={'/list/question/' + quiz.id}
              className={'quiz-link-to-create quiz-item'}
              key={quiz.id}
            >
              <TextButton
                label={quiz.libelle}
                bgColor={Color.BLUE}
                textColor={Color.WHITE}
                className='quiz-item-button'
              />

              {isAdmin && (
                <IconButton
                  icon={faCaretRight}
                  bgColor={Color.TRANSPARENT}
                  iconColor={Color.GREEN}
                  borderColor={Color.TRANSPARENT}
                  tooltip={'Démarrer le quiz'}
                  className={'quiz-item-icon'}
                />
              )}
              <TextButton
                label={getButtonLabel(quiz.etat)}
                bgColor={getButtonColor(quiz.etat)}
                textColor={Color.WHITE}
                className='quiz-item-button quiz-item-button-state'
              />
            </Link>
          ))}
        </div>

        {isAdmin && (
          <Link to={'/create/quiz'} className={'quiz-link-to-create'}>
            <TextButton
              label='Créer un nouveau quiz'
              bgColor={Color.WHITE}
              textColor={Color.BLUE}
              borderColor={Color.BLUE}
            />
          </Link>
        )}
      </div>
    </>
  ) : (
    loadingState === LoadingStateEnum.LOADING && <>Chargement...</>
  );
};

export default QuizListContainer;

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
