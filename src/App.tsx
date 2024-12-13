import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthRouter from './modules/auth/routers/AuthRouter/AuthRouter';
import QuestionRouter from './modules/question/routers/QuestionRouter/QuestionRouter.tsx';
import QuizRouter from './modules/quizz/routers/QuizRouter/QuizRouter.tsx';
import ProfileContainer from './modules/profile/containers/ProfileContainer/ProfileContainer.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/auth/*' element={<AuthRouter />} />
        <Route path='/question/*' element={<QuestionRouter />} />
        <Route path='/quiz/*' element={<QuizRouter />} />
        <Route path='/profile' element={<ProfileContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
