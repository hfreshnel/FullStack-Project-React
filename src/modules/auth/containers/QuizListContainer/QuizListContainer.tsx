import React from 'react';
import './QuizListContainer.css';
import { QuizEtatEnum } from '../../../../common/enums/QuizEtatEnum';
import { EtapeEnum } from '../../../../common/enums/EtapeEnum';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import { Color } from '../../../../common/enums/Color.ts';

const QuizListContainer: React.FC = () => {
  const quizList = [
    {
      id: 1,
      libelle: 'Quiz 1',
      etat: QuizEtatEnum.PENDING,
      dateDebutQuiz: new Date('2023-12-01T10:00:00'),
      noQuestionCourante: 2,
      etape: EtapeEnum.SHOW_QUESTION,
      dateDebutQuestion: new Date('2023-12-01T10:05:00'),
      questionList: [],
    },
    {
      id: 2,
      libelle: 'Quiz 2',
      etat: QuizEtatEnum.DONE,
      dateDebutQuiz: new Date('2023-11-20T15:00:00'),
      noQuestionCourante: 0,
      etape: EtapeEnum.SHOW_STATS,
      dateDebutQuestion: new Date('2023-11-20T15:30:00'),
      questionList: [],
    },
    {
      id: 3,
      libelle: 'Quiz 3',
      etat: QuizEtatEnum.INACTIVE,
      dateDebutQuiz: new Date('2023-12-05T14:00:00'),
      noQuestionCourante: 0,
      etape: EtapeEnum.SHOW_ANSWERS,
      dateDebutQuestion: new Date('2023-12-05T14:00:00'),
      questionList: [],
    },
  ];

  return (
    <div className='page-container'>
      <h1 className='quiz-list-title'>Liste des Quiz</h1>
      <div className='quiz-list-container'>
        <div className='quiz-list'>
          {quizList.map(quiz => (
            <TextButton
              key={quiz.id}
              label={quiz.libelle}
              bgColor={Color.BLUE}
              textColor={Color.WHITE}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizListContainer;
