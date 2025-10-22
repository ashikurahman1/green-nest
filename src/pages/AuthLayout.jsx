import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="backgroundBg min-h-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
