import { Routes, Route } from 'react-router-dom';
import QuestionListContainer from '../../containers/QuestionListContainer/QuestionListContainer.tsx';

const QuestionRouter = () => {
  return (
    <Routes>
      <Route path='/list' element={<QuestionListContainer />} />
    </Routes>
  );
};

export default QuestionRouter;
