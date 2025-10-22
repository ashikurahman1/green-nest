import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="text-center py-10">Loading...</span>;
  }
  if (!user) {
    return <Navigate to="/auth/login" state={location?.pathname} replace />;
  }
  return children;
};

export default ProtectedRoutes;
