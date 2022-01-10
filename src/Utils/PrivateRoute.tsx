import { Navigate } from 'react-router-dom';
import { IPrivateRoute } from '../Models/IPrivateRoute';
import { useAuth } from './Contexs/AuthContext';

export const PrivateRoute: React.FC<IPrivateRoute> = ({ component: RouteComponent }) => {
  // importing state from context
  const { currentUser, currentUserLoading } = useAuth();

  return currentUser || currentUserLoading ? <RouteComponent /> : <Navigate replace to='/signin' />;
};
