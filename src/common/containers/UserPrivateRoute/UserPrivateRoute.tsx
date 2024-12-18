import { Navigate } from 'react-router-dom';
import { LOCALSTORAGE_USER } from '../../utils/consts/consts';
import { TUserPrivateRouteProps } from './types/TUserPrivateRouteProps';

export default function UserPrivateRoute({ children }: TUserPrivateRouteProps) {
  const isAuthenticated = () => {
    const user = localStorage.getItem(LOCALSTORAGE_USER);
    return user !== null;
  };

  if (!isAuthenticated()) {
    localStorage.removeItem(LOCALSTORAGE_USER);
    return <Navigate to='/auth/login' replace />;
  }

  return <>{children}</>;
}
