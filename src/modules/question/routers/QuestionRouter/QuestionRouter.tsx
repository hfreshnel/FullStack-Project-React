import { Routes, Route } from 'react-router-dom';
import QuestionListContainer from '../../container/QuestionListContainer/QuestionListContainer.tsx';

const QuestionRouter = () => {
  return (
    <Routes>
      <Route path='/list' element={<QuestionListContainer />} />
    </Routes>
  );
};

export default QuestionRouter;
