import { Routes, Route } from 'react-router-dom';
import QuestionListContainer from '../../containers/QuestionListContainer/QuestionListContainer.tsx';

const QuestionRouter = () => {
  return (
    <Routes>
      {/* Route avec un paramètre dynamique */}
      <Route path='/list/:id' element={<QuestionListContainer />} />
    </Routes>
  );
};

export default QuestionRouter;
