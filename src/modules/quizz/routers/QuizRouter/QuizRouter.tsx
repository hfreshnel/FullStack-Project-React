import { Routes, Route } from 'react-router-dom';
import QuizCreateContainer from '../../container/QuizCreateContainer/QuizCreateContainer.tsx';
import QuizListContainer from '../../container/QuizListContainer/QuizListContainer.tsx';

const QuizRouter = () => {
  return (
    <Routes>
      <Route path='/list' element={<QuizListContainer />} />
      <Route path='/create' element={<QuizCreateContainer />} />
    </Routes>
  );
};

export default QuizRouter;
