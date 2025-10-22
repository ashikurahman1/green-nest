import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        background: 'url("/images/footerBg.png"), #15803d',
      }}
    >
      <div className="w-full max-w-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
