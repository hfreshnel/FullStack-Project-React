import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthRouter from './modules/auth/routers/AuthRouter/AuthRouter';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/auth/*' element={<AuthRouter />} />
      </Routes>
    </Router>
  );
};

export default App;
