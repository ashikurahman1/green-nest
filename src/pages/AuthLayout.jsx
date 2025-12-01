import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex justify-center items-center min-h-screen"
        style={{
          background: 'url("/images/imgheader.jpg")',
        }}
      >
        <div className="w-full max-w-xl mt-10">
          <Outlet />
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default AuthLayout;
