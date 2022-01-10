import { Navigate } from 'react-router-dom';
import { IPrivateRoute } from '../Models/IPrivateRoute';
import { useAuth } from './Contexs/AuthContext';

export const PrivateRoute: React.FC<IPrivateRoute> = ({ component: RouteComponent }) => {
  // importing state from context
  const { currentUser } = useAuth();

  // using state to toggle the private routing.
  return currentUser ? <RouteComponent /> : <Navigate replace to='/' />;
};
