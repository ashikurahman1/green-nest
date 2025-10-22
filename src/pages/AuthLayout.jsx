import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="backgroundBg">
      <div className="flex flex-col justify-center items-center min-h-screen max-w-2xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
