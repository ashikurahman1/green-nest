import { createBrowserRouter } from 'react-router';
import Root from '../root/Root';
import HomeLayout from '../pages/HomeLayout';
import Plants from '../pages/Plants';

import PlantDetails from '../pages/PlantDetails';
import Loader from '../components/Loader/Loader';
import AuthLayout from '../pages/AuthLayout';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    loader: Loader,
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
        path: '/plant/:id',
        element: <PlantDetails />,
      },
      {
        path: '/profile',
        element: <p>I am Profile</p>,
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
