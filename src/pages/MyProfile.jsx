import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocation } from 'react-router';

const MyProfile = () => {
  const { user, updateUser, setUser } = use(AuthContext);

  const updateProfile = e => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photoUrl.value;

    updateUser({ displayName, photoURL })
      .then(result => {
        setUser({ ...user, displayName, photoURL });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  return (
    <div className="bg-base-200">
      <div
        className="py-20 text-center bg-cover bg-no-repeat"
        style={{ background: 'url("/public/images/imgheader.jpg")' }}
      >
        <h3 className="text-3xl lg:text-4xl font-bold rounded mb-4">Welcome</h3>
        <h2 className="text-4xl lg:text-5xl font-bold rounded mb-4 text-green-600  ">
          {user.displayName}
        </h2>
        <p className="text-lg">You can update your info easily!</p>
      </div>
      <div className="py-20">
        <div className="p-10 lg:max-w-xl shadow-lg mx-auto bg-white rounded-lg">
          <h3 className="text-3xl font-semibold mb-8">Update your Profile</h3>
          <form onSubmit={updateProfile} className="flex flex-col gap-3 py-2 ">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label for="name" className=" font-medium">
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                onChange={e => e.currentTarget.value}
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
                disabled
                type="email"
                value={user?.email}
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
                defaultValue={user?.photoURL}
                onChange={e => e.currentTarget.value}
                required
                placeholder="Enter your photo url"
                className="input input-bordered w-full focus:outline-0 focus:border-green-600"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2 bg-green-600 rounded text-white font-semibold hover:bg-green-700 transition cursor-pointer mt-5"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
