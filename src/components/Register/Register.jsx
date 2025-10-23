import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';
import { AuthContext } from '../../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
const Register = () => {
  const { createUser, setUser, loginGoogle, updateUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleUserRegister = e => {
    e.preventDefault();
    const fullName = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateUser({ displayName: fullName, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: fullName, photoURL: photoUrl });
            navigate('/');
            Swal.fire({
              title: 'Account created successfully',
              icon: 'success',
              draggable: true,
              confirmButtonColor: '#16a34a',
            });
          })
          .catch(err => console.error(err.message));
      })
      .catch(err => {
        console.error(err.message);
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    loginGoogle()
      .then(() => {
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
          Create your account
        </h2>
        <form
          onSubmit={handleUserRegister}
          className="flex flex-col gap-3 py-2 "
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label for="name" className=" font-medium">
              Full Name:
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your Full name"
              className="input input-bordered w-full focus:outline-0 focus:border-green-600"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label for="email" className=" font-medium">
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
          {/* Photo URL */}
          <div className="flex flex-col gap-2">
            <label for="photoUrl" className=" font-medium">
              Photo Url:
            </label>
            <input
              type="url"
              name="photoUrl"
              required
              placeholder="Enter your photo url"
              className="input input-bordered w-full focus:outline-0 focus:border-green-600"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 relative">
            <label for="password" className=" font-medium">
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

          {/* Submit */}
          <button
            type="submit"
            className="mt-5 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition font-semibold cursor-pointer"
          >
            Sign up
          </button>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
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
          Already have an account?{' '}
          <Link to="/auth/login" className="text-green-600">
            Login
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

export default Register;
