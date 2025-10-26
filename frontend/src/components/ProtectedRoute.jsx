import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;