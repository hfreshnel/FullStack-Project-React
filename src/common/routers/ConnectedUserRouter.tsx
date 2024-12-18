import { Route, Routes } from 'react-router-dom';
import UserPrivateRoute from '../containers/UserPrivateRoute/UserPrivateRoute';

export default function ConnectedUserRouter() {
  return (
    <UserPrivateRoute>
      <Routes>
        <Route path='/connected' element={<>connected</>} />
      </Routes>
    </UserPrivateRoute>
  );
}
