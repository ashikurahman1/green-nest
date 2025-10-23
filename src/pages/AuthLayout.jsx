import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
  return (
    <>
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
      <ToastContainer />
    </>
  );
};

export default AuthLayout;
