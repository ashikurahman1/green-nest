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
        path: '/plant/:id',
        element: (
          <ProtectedRoutes>
            <PlantDetails />
          </ProtectedRoutes>
        ),
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
