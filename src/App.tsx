import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './modules/auth/LoginForm.tsx';
import RegisterPage from './modules/auth/RegisterPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
