import { createContext, ReactNode, useContext, useState } from 'react';
import { IQuizEntity } from '../../entities/IQuizEntity';
import { TQuizContextType } from './types/TQuizContextType';



const QuizContext = createContext<TQuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuiz, setCurrentQuiz] = useState<IQuizEntity | null>(null);
  const [allQuizzes, setAllQuizzes] = useState<IQuizEntity[] | null>(null);

  return (
    <QuizContext.Provider
      value={{
        currentQuiz,
        allQuizzes,
        setCurrentQuiz,
        setAllQuizzes,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = (): TQuizContextType => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
};
