import React, { use, useRef, useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);

  const { loginUser, loginGoogle, passwordForget } = use(AuthContext);

  const handleLoginWithEmail = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          title: 'Login Success!',
          icon: 'success',
          draggable: true,
          confirmButtonColor: '#16a34a',
        });
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(err => {
        if (
          err.code === 'auth/invalid-credential' ||
          err.code === 'auth/wrong-password'
        ) {
          Swal.fire({
            title: 'Invalid email or password',
            icon: 'error',
            draggable: true,
            confirmButtonColor: 'red',
          });
        }
        console.error(err.code);
      });
  };

  const handleGoogleLogin = () => {
    loginGoogle()
      .then(() => {
        Swal.fire({
          title: 'Login Success!',
          icon: 'success',
          draggable: true,
          confirmButtonColor: '#16a34a',
        });
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(err => {
        console.error(err);
        alert(err.message);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current?.value;

    if (!email) {
      return Swal.fire({
        title: 'No email',
        text: 'Please enter your email above the receive a reset link',
        icon: 'warning',
        confirmButtonColor: 'red',
      });
    }

    passwordForget(email)
      .then(() => {
        Swal.fire({
          title: 'Reset Email Sent',
          text: `A password reset link has been sent to ${email}. Check your inbox (and spam).`,
          icon: 'success',
          confirmButtonColor: '#16a34a',
        });
      })
      .catch(err => {
        console.error(err.message);
        Swal.fire({
          title: 'Error',
          text: err.message || 'Failed to send reset email',
          icon: 'error',
        });
      });
  };
  return (
    <div className="w-full p-4 ">
      <div className="bg-base-100 shadow-xl rounded-xl p-7 md:p-15 md:px-20 border-t-6 border-green-600">
        <h2 className="font-semibold text-center text-4xl text-green-600 mb-4">
          Login
        </h2>
        <form
          onSubmit={handleLoginWithEmail}
          className="flex flex-col gap-3 py-2 "
        >
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className=" font-medium">Email:</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              className="input input-bordered w-full focus:outline-0 focus:border-green-600"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 relative">
            <label className=" font-medium">Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              required
              placeholder="Enter your password"
              className="input input-bordered w-full focus:outline-0 focus:border-green-600 pr-10"
            />
            <span
              className="absolute right-3 top-[42px] text-gray-500 cursor-pointer z-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Forgot Password */}
          <button
            type="button"
            onClick={handleResetPassword}
            className="text-green-600 hover:underline cursor-pointer text-left"
          >
            Forgot password?
          </button>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition font-semibold cursor-pointer"
          >
            Login
          </button>

          <div className="divider">OR</div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={25} />
            Continue with Google
          </button>
        </form>

        <p className="mt-5 text-center">
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-green-600">
            Register
          </Link>
        </p>

        <div className="flex flex-col items-center justify-center">
          <button
            className="btn btn-neutral mt-8"
            onClick={() => navigate('/')}
          >
            <FaArrowCircleLeft /> <span>Go Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
