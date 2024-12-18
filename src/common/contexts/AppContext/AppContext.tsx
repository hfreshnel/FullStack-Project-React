import { QuizProvider } from '../QuizContext/QuizContext';
import { TAppContextProps } from './types/TAppContextProps';

export const AppContext = ({ children }: TAppContextProps) => {
  return <QuizProvider>{children}</QuizProvider>;
};
