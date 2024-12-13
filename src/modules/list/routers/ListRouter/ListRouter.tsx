import { Routes, Route } from 'react-router-dom';
import QuizListContainer from '../../containers/QuizListContainer/QuizListContainer.tsx';
import QuestionListContainer from '../../containers/QuestionListContainer/QuestionListContainer.tsx';

const ListRouter = () => {
  return (
    <Routes>
      <Route path='/quiz' element={<QuizListContainer />} />
      <Route path='/question' element={<QuestionListContainer />} />
    </Routes>
  );
};

export default ListRouter;
