import React, { useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <div className="bg-base-100 w-full lg:max-w-xl mx-auto p-4 py-10 shadow-xl rounded-xl">
        <h2 className="font-semibold text-center text-4xl text-green-600 mb-4">
          Login
        </h2>
        <form
          // onSubmit={handleLogin}
          className="flex flex-col gap-3 py-2 max-w-md mx-auto"
        >
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
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
            <label htmlFor="password" className="text-sm font-medium">
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
              className="absolute right-3 top-[42px] text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
            Forgot password?
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <button
            type="button"
            // onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>
        </form>
        <button className="btn btn-neutral mt-4" onClick={() => navigate('/')}>
          <FaArrowCircleLeft /> <span>Go Home</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
