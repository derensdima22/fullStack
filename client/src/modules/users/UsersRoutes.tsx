import { SuspenseWrapper } from '@core/routes';
import { lazy } from 'react';

const UsersModule = lazy(() => import('@modules/users/UsersModule'));

export const usersRoutes = [
  {
    path: 'users',
    element: <SuspenseWrapper><UsersModule/></SuspenseWrapper>,
    children: [],
  },
];
