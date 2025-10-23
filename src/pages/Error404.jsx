import React from 'react';
import { Link, Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import ErrorImg from '../assets/error404.png';
import Button from '../components/Button';
const Error404 = () => {
  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen bg-green-700"
        // style={{
        //   background: 'url("/images/imgheader.jpg")',
        // }}
      >
        <div className="w-full max-w-xl space-y-5">
          <img src={ErrorImg} alt="error img" />
          <Link to="/" className="">
            <Button btnText="Go to home" />
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Error404;
