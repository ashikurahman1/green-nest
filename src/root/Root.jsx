import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      {/* Footer */}
    </div>
  );
};

export default Root;
