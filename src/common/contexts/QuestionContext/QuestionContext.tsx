import { createContext, ReactNode, useContext, useState } from 'react';
import { IQuestionEntity } from '../../entities/IQuestionEntity';
import { TQuestionContextType } from './types/TQuestionContextType';

const QuestionContext = createContext<TQuestionContextType | undefined>(
  undefined,
);

export const QuestionProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuestion, setCurrentQuestion] =
    useState<IQuestionEntity | null>(null);
  const [allQuestions, setAllQuestions] = useState<IQuestionEntity[] | null>(
    null,
  );

  return (
    <QuestionContext.Provider
      value={{
        currentQuestion,
        allQuestions,
        setCurrentQuestion,
        setAllQuestions,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = (): TQuestionContextType => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error(
      'useQuestionContext must be used within a QuestionProvider',
    );
  }
  return context;
};
