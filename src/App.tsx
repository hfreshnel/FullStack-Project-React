import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthRouter from './modules/auth/routers/AuthRouter/AuthRouter';
import ListRouter from './modules/auth/routers/ListRouter/ListRouter';
import ProfileRouter from './modules/profile/routers/ProfileRouter/ProfileRouter.tsx';
import CreateRouter from './modules/create/routers/CreateRouter/CreateRouter.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/auth/*' element={<AuthRouter />} />
        <Route path='/list/*' element={<ListRouter />} />
        <Route path='/create/*' element={<CreateRouter />} />
        <Route path='/profile/*' element={<ProfileRouter />} />
      </Routes>
    </Router>
  );
};

export default App;
