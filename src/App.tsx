import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthRouter from './modules/auth/routers/AuthRouter/AuthRouter';
import QuestionRouter from './modules/question/routers/QuestionRouter/QuestionRouter.tsx';
import QuizRouter from './modules/quizz/routers/QuizRouter/QuizRouter.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/auth/*' element={<AuthRouter />} />
        <Route path='/question/*' element={<QuestionRouter />} />
        <Route path='/quiz/*' element={<QuizRouter />} />
      </Routes>
    </Router>
  );
};

export default App;
