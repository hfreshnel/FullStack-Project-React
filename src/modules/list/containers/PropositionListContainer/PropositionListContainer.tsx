import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import IconButton from '../../../../common/components/icon-button/IconButton.tsx';
import MainCard from '../../../../common/components/main-card/MainCard.tsx';
import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import './PropositionListContainer.css';

const PropositionListContainer: React.FC = () => {
  const isAdmin = false;

  const questionList = [
    { id: 1, libelle: 'Réponse 1', correct: true },
    { id: 2, libelle: 'Réponse 2', correct: false },
    { id: 3, libelle: 'Réponse 3', correct: true },
    { id: 4, libelle: 'Réponse 4', correct: false },
  ];

  return (
    <>
      <MainMenu />
      <div className='question-list-title-container'>
        <h1 className='question-list-title'>
          Question 1
          {isAdmin && (
            <IconButtonimport { faCaretRight } from '@fortawesome/free-solid-svg-icons';
            import React from 'react';
            import { Link, useNavigate } from 'react-router-dom';
            import IconButton from '../../../../common/components/icon-button/IconButton.tsx';
            import MainMenu from '../../../../common/components/main-menu/mainMenu.tsx';
            import TextButton from '../../../../common/components/text-button/TextButton.tsx';
            import { Color } from '../../../../common/enums/Color.ts';
            import { EtapeEnum } from '../../../../common/enums/EtapeEnum';
            import { QuizEtatEnum } from '../../../../common/enums/QuizEtatEnum';
            import './QuizListContainer.css';
            
            const QuizListContainer: React.FC = () => {
              const navigate = useNavigate();
              const isAdmin = false;
            
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
            
              return (
                <>
                  <MainMenu />
                  <div className='quiz-list-title-container'>
                    <h1 className='quiz-list-title'>Liste des Quiz</h1>
                    <div className='quiz-list-container'>
                      {quizList.map(quiz => (
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
                          <IconButton
                            icon={faCaretRight}
                            bgColor={Color.TRANSPARENT}
                            iconColor={Color.GREEN}
                            borderColor={Color.TRANSPARENT}
                            tooltip={'Démarrer le quiz'}
                            className={'quiz-item-icon'}
                          />
                        </Link>
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
            
              icon={faPenToSquare}
              iconColor={Color.YELLOW}
              bgColor={Color.WHITE}
              className='question-title-icon'
            />
          )}
        </h1>
      </div>
      <div className='question-list-container'>
        {questionList.map(choice => (
          <div className='question-item' key={choice.id}>
            <MainCard
              label={choice.libelle}
              bgColor={Color.BLUE}
              textColor={Color.WHITE}
              className='question-item-card'
            />
            {isAdmin && (
              <IconButton
                icon={faPenToSquare}
                iconColor={Color.YELLOW}
                bgColor={Color.WHITE}
                className='question-item-icon'
              />
            )}
          </div>
        ))}
      </div>
      {isAdmin && (
        <TextButton
          label={'Sauvegarder la question'}
          bgColor={Color.WHITE}
          textColor={Color.BLUE}
          borderColor={Color.BLUE}
          className='save-button'
        />
      )}
    </>
  );
};

export default PropositionListContainer;
