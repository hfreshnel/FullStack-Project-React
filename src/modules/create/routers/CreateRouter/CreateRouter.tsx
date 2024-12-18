import { Routes, Route } from 'react-router-dom';
import QuizCreateContainer from '../../containers/QuizCreateContainer/QuizCreateContainer.tsx';
import QuestionCreateContainer from '../../containers/QuestionCreateContainer/QuestionCreateContainer.tsx';

const CreateRouter = () => {
  return (
    <Routes>
      <Route path='/quiz' element={<QuizCreateContainer />} />
      <Route path='/question' element={<QuestionCreateContainer />} />
    </Routes>
  );
};

export default CreateRouter;
