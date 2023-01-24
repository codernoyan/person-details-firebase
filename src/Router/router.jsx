/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import loadUserData from '../auth/auth';
import Home from '../Components/Home';
import Spinner from '../Components/Spinner';
import Main from '../Layout/Main';

const LazyUserDetails = React.lazy(() => import('../Components/UserDetails'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/user-details/:id',
        loader: ({ params }) => loadUserData(params?.id),
        element: (
          <React.Suspense fallback={<Spinner />}>
            <LazyUserDetails />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
