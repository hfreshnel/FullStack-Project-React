import { Navigate, Outlet } from 'react-router-dom';
import { LOCALSTORAGE_USER } from '../../utils/consts/consts';
import { TUserPrivateRouteProps } from './types/TUserPrivateRouteProps';

export default function UserPrivateRoute() {
  const isAuthenticated = () => {
    const user = localStorage.getItem(LOCALSTORAGE_USER);
    return user !== null;
  };

  if (!isAuthenticated()) {
    localStorage.removeItem(LOCALSTORAGE_USER);
    return <Navigate to='/auth/login' replace />;
  }

  return <Outlet />;
}
