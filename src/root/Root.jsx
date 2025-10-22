import React, { use } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import Loader from '../components/Loader/Loader';

const Root = () => {
  const { loading } = use(AuthContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
