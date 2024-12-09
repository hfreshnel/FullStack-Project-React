import { Routes, Route } from 'react-router-dom';
import { TAuthRouterProps } from './types/TAuthRouterProps';
import LoginContainer from '../../containers/LoginContainer/LoginContainer';
import SignUpContainer from '../../containers/SignUpContainer/SignUpContainer';
import React from 'react';

const AuthRouter: React.FC<TAuthRouterProps> = ({}) => {
  return (
    <Routes>
      <Route path='/login' element={<LoginContainer />} />
      <Route path='/signup' element={<SignUpContainer />} />
    </Routes>
  );
};

export default AuthRouter;
