import { Link, NavLink, useNavigate } from 'react-router';
import Logo from '../assets/logo.png';
import { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import Button from './Button';
import { LuMenu } from 'react-icons/lu';
import { MdClose } from 'react-icons/md';
const menus = [
  { name: 'Home', path: '/', id: 1 },
  { name: 'Plants', path: '/plants', id: 2 },
  { name: 'My Profile', path: '/profile', id: 3 },
];
const navLink = (
  <>
    {menus.map(menu => (
      <NavLink
        key={menu.id}
        to={menu.path}
        className="font-semibold text-[16px]"
      >
        {menu.name}
      </NavLink>
    ))}
  </>
);

const Navbar = () => {
  const navigate = useNavigate();
  const { user, userLogout, loading } = use(AuthContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleLogout = () => {
    userLogout()
      .then(() => {
        navigate('/');
        toast.error('Logout Success');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <nav className="">
      <div className="w-full lg:w-10/12 mx-auto px-3 navbar bg-white mt-2 rounded-full shadow-md fixed top-0 z-50 left-0 right-0">
        <div className="navbar-start">
          <div className="dropdown mx-3">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden"
            >
              {mobileMenu ? <MdClose size={30} /> : <LuMenu size={30} />}
            </button>
            {mobileMenu && (
              <ul className="menu menu-md text-[16px] dropdown-content rounded-box z-100 mt-6 w-62 p-5 space-y-6 shadow bg-neutral-100">
                {navLink}
              </ul>
            )}
          </div>
          <Link to="/" className="text-xl flex items-center gap-2">
            <img src={Logo} alt="" className="w-12 hidden md:flex " />
            <span className="text-2xl lg:text-3xl font-bold ">
              Green<span className="text-green-600">Nest</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-5">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <div className="px-4 py-2">Loading...</div>
          ) : user ? (
            <ul className="menu menu-horizontal ">
              <li>
                <details className="relative  bg-transparent ">
                  <summary>
                    <img
                      src={user.photoURL}
                      className="w-10 h-10 rounded-full"
                    />
                  </summary>
                  <ul className="p-4 space-y-3 absolute  right-0 min-w-[200px] z-50">
                    <p
                      className="text-green-600 font-semibold text-2xl
                    "
                    >
                      Welcome!{' '}
                    </p>
                    <li className="text-lg font-semibold">
                      {user.displayName
                        ? user.displayName.split(' ').slice(0, 2).join(' ')
                        : 'User'}
                    </li>
                    <Button btnText="Logout" onClick={handleLogout} />
                  </ul>
                </details>
              </li>
            </ul>
          ) : (
            <div className="flex items-center gap-5">
              <Link
                to="/auth/login"
                className="px-5 py-2 border-2 border-green-600  font-semibold rounded-full hover:bg-green-600 hover:text-white transition cursor-pointer"
              >
                Login{' '}
              </Link>
              <Link
                to="/auth/register"
                className="hidden lg:flex px-5 py-2 bg-green-600 border-2 border-green-600   text-white font-semibold rounded-full hover:bg-green-700 hover:border-green-700 transition cursor-pointer"
              >
                Register{' '}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
