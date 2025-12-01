import { Link } from 'react-router';
import Logo from '../assets/logo-white.png';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer
        className="relative z-10 py-10 bg-no-repeat bg-cover"
        style={{
          background: 'url("/images/footerBg.png"), green',
        }}
      >
        <div className="w-full lg:w-10/12 mx-auto p-4 text-white">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <Link
                  to="/"
                  className="text-xl text-white flex items-center gap-2 mb-5"
                >
                  <img src={Logo} alt="" className="w-10 hidden lg:flex" />
                  <span className="text-3xl font-bold ">
                    Green<span className="">Nest</span>
                  </span>
                </Link>
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                  GreenNest is your ultimate companion for discovering, growing,
                  and nurturing plants. Whether you're a beginner or a seasoned
                  plant lover, GreenNest helps you build your perfect green
                  space—one leaf at a time.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-between w-full px-4 sm:w-2/3 lg:w-6/12">
              <div>
                <h3 className="mb-3 md:mb-6 text-lg font-semibold">
                  Resources
                </h3>
                <ul className="menu space-y-3">
                  <Link to="/" className="hover:text-green-200">
                    Plant Encyclopedia
                  </Link>
                  <Link to="/" className="hover:text-green-200">
                    Care Guides
                  </Link>
                  <Link to="/" className="hover:text-green-200">
                    Green Tips & Blogs
                  </Link>
                  <Link to="/" className="hover:text-green-200">
                    Gardening Tools
                  </Link>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 md:mb-6 text-lg font-semibold">Company</h3>
                <ul className="menu space-y-3">
                  <Link to="/about-us" className="hover:text-green-200">
                    About GreenNest
                  </Link>
                  <Link to="/contact" className="hover:text-green-200">
                    Contact & Support
                  </Link>
                  <Link to="/" className="hover:text-green-200">
                    Community Stories
                  </Link>
                  <Link to="/privacy-policy" className="hover:text-green-200">
                    Privacy & Terms
                  </Link>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 md:mb-6 text-lg font-semibold">
                  Quick Links
                </h3>
                <ul className="menu space-y-3">
                  <Link to="/" className="hover:text-green-200">
                    Help & FAQ
                  </Link>
                  <Link to="/" className="hover:text-green-200">
                    Our Services
                  </Link>
                  <Link to="/" className="hover:text-green-200">
                    Meet the Team
                  </Link>
                  <Link to="/" className="hover:text-green-200">
                    Download App
                  </Link>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mt-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center">
                  <a
                    target="_blank"
                    href="http://linkedin.com/in/ashikur-dev"
                    className="social-button"
                  >
                    <FaLinkedin size={25} />
                  </a>
                  <a
                    target="_blank"
                    href="https://facebook.com/ashikurrdev"
                    className="social-button"
                  >
                    <FaFacebook size={25} />
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/ashikurahman1"
                    className="social-button"
                  >
                    <FaGithub size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {
            <p className="text-base text-body-color dark:text-dark-6">
              &copy; {new Date().getFullYear()} GreenNest | All right reserved.
            </p>
          }
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
