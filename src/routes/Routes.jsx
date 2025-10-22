import { createBrowserRouter } from 'react-router';
import Root from '../root/Root';
import HomeLayout from '../pages/HomeLayout';
import Plants from '../pages/Plants';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: HomeLayout,
        loader: () => fetch('/data/plants.json'),
      },
      {
        path: '/',
        Component: HomeLayout,
      },
      {
        path: '/plants',
        element: <Plants />,
        loader: () => fetch('/data/plants.json'),
      },
      {
        path: '/profile',
        element: <p>I am Profile</p>,
      },
    ],
  },
]);
