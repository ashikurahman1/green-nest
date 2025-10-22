import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoutes = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/auth/login" />;
};

export default ProtectedRoutes;
