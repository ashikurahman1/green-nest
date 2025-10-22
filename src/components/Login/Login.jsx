import React, { use, useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { loginUser, loginGoogle } = use(AuthContext);
  const handleLoginWithEmail = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(result => {
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(err => {
        console.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    loginGoogle()
      .then(result => {
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div className="w-full p-4 ">
      <div className="bg-base-100 shadow-xl rounded-xl p-7 md:p-15 md:px-20 border-t-6 border-green-600">
        <h2 className="font-semibold text-center text-5xl text-green-600 mb-4">
          Login
        </h2>
        <form
          onSubmit={handleLoginWithEmail}
          className="flex flex-col gap-3 py-2 "
        >
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className=" font-medium">
              Email:
            </label>
            <input
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
            <label htmlFor="password" className=" font-medium">
              Password:
            </label>
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
          <div className="text-green-600 hover:underline cursor-pointer">
            Forgot password?
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition font-semibold cursor-pointer"
          >
            Login
          </button>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>
        </form>

        <p className="mt-5 text-center">
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-green-600">
            Register
          </Link>
        </p>

        <button className="btn btn-neutral mt-8" onClick={() => navigate('/')}>
          <FaArrowCircleLeft /> <span>Go Home</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
