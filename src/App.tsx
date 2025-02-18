import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import AuthRouter from './modules/auth/routers/AuthRouter/AuthRouter';
import UserPrivateRoute from './common/containers/UserPrivateRoute/UserPrivateRoute.tsx';
import CreateRouter from './modules/create/routers/CreateRouter/CreateRouter.tsx';
import ListRouter from './modules/list/routers/ListRouter/ListRouter.tsx';
import ProfileRouter from './modules/profile/routers/ProfileRouter/ProfileRouter.tsx';
import LiveQuestionContainer from './modules/live/containers/LiveQuestionContainer/LiveQuestionContainer.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/auth/login' replace />} />
        <Route element={<UserPrivateRoute />}>
          <Route path='/create/*' element={<CreateRouter />} />
          <Route path='/list/*' element={<ListRouter />} />
          <Route path='/live/' element={<LiveQuestionContainer />} />
          <Route path='/profile/*' element={<ProfileRouter />} />
        </Route>
        <Route path='/auth/*' element={<AuthRouter />} />
      </Routes>
    </Router>
  );
};

export default App;
