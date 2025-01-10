import { Routes, Route } from 'react-router-dom';
import QuizListContainer from '../../containers/QuizListContainer/QuizListContainer.tsx';
import QuestionListContainer from '../../containers/QuestionListContainer/QuestionListContainer.tsx';
import AnswerListContainer from '../../containers/AnswerListContainer/AnswerListContainer.tsx';

const ListRouter = () => {
  return (
    <Routes>
      <Route path='/quiz' element={<QuizListContainer />} />
      <Route path='/questions/:id' element={<QuestionListContainer />} />
      <Route path='/answer' element={<AnswerListContainer />} />
    </Routes>
  );
};

export default ListRouter;
