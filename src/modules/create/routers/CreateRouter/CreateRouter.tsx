import { Routes, Route } from 'react-router-dom';
import QuizCreateContainer from '../../containers/QuizCreateContainer/QuizCreateContainer.tsx';

const CreateRouter = () => {
  return (
    <Routes>
      <Route path='/quiz' element={<QuizCreateContainer />} />
    </Routes>
  );
};

export default CreateRouter;
