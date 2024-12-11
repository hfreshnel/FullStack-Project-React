import { Routes, Route } from 'react-router-dom';
import LoginContainer from '../../containers/LoginContainer/LoginContainer';
import SignUpContainer from '../../containers/SignUpContainer/SignUpContainer';

const AuthRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginContainer />} />
      <Route path='/signup' element={<SignUpContainer />} />
    </Routes>
  );
};

export default AuthRouter;
