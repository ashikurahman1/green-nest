import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';
import { AuthContext } from '../../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import Button from '../Button';
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, setUser, loginGoogle, updateUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const handlePasswordValidation = e => {
    const paswordvalue = e.target.value;
    setPassword(paswordvalue);
    if (paswordvalue.length < 6) {
      setPasswordErr('Password must be at least 6 character');
    } else if (!/[A-Z]/.test(paswordvalue)) {
      setPasswordErr('Password must have an Uppercase letter');
    } else if (!/[a-z]/.test(paswordvalue)) {
      setPasswordErr('Password must have an lowercase letter');
    } else {
      setPasswordErr('');
    }
  };

  const handleUserRegister = e => {
    e.preventDefault();
    if (passwordErr) {
      toast.error('Please add a valid password');
      return;
    }
    const fullName = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
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
          .catch(err => {
            console.error(err.message);
          });
      })
      .catch(err => {
        console.error(err.message);
        if (err.code === 'auth/email-already-in-use') {
          toast.error('Email already exist');
        } else if (err.code === 'auth/invalid-email') {
          toast.error('Invalid email address');
        } else {
          toast.error(err.message);
        }
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
  return (
    <div className="bg-base-100 m-3 rounded-md">
      <div className="p-10">
        <h2 className="text-center text-3xl text-green-600 mb-5">
          Create your account
        </h2>
        <form onSubmit={handleUserRegister} className="flex flex-col gap-2">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className=" font-medium">Full Name:</label>
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
            <label className=" font-medium">Email:</label>
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
            <label className=" font-medium">Photo Url:</label>
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
            <label className=" font-medium">Password:</label>
            <input
              value={password}
              onChange={handlePasswordValidation}
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
            <p className="text-red-500 text-sm">{passwordErr}</p>
          </div>

          <Button btnText=" Sign up" />

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
