import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen"
        style={{
          background: 'url("/images/imgheader.jpg")',
        }}
      >
        <div className="w-full max-w-xl">
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AuthLayout;
