import { createBrowserRouter } from 'react-router';
import Root from '../root/Root';
import HomeLayout from '../pages/HomeLayout';
import Plants from '../pages/Plants';
import PlantDetails from '../pages/PlantDetails';
import AuthLayout from '../pages/AuthLayout';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import MyProfile from '../pages/MyProfile';
import ProtectedRoutes from './ProtectedRoutes';
import Error404 from '../pages/Error404';
import AboutUs from '../pages/AboutUs';
import Contact from '../components/Contact';
import PrivacyPolicy from '../components/PrivacyPolicy';
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: '/',
        Component: HomeLayout,
      },
      {
        path: '/plants',
        element: <Plants />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/plant/:id',
        element: <PlantDetails />,
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoutes>
            <MyProfile />
          </ProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        Component: Login,
      },
      {
        path: '/auth/register',
        Component: Register,
      },
    ],
  },
]);
