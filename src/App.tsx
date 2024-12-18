import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthRouter from './modules/auth/routers/AuthRouter/AuthRouter';
import CreateRouter from './modules/create/routers/CreateRouter/CreateRouter.tsx';
import ListRouter from './modules/list/routers/ListRouter/ListRouter.tsx';
import ProfileRouter from './modules/profile/routers/ProfileRouter/ProfileRouter.tsx';
import ConnectedUserRouter from './common/routers/ConnectedUserRouter.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/private/*' element={<ConnectedUserRouter />} />
        <Route path='/auth/*' element={<AuthRouter />} />
        <Route path='/create/*' element={<CreateRouter />} />
        <Route path='/list/*' element={<ListRouter />} />
        <Route path='/profile/*' element={<ProfileRouter />} />
      </Routes>
    </Router>
  );
};

export default App;
