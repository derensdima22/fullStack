
import { lazy } from 'react';
import { AuthLoginPage, AuthRegistrationPage } from './pages';
import { SuspenseWrapper } from '@core/routes';

const AuthModule = lazy(() => import('./AuthModule'));

export const authRoutes = [
  {
    path: 'auth',
    element: <SuspenseWrapper><AuthModule/></SuspenseWrapper>,
    children: [
      {
        index: true,
        // path: 'login',
        element: <AuthLoginPage/>,
      },
      {
        path: 'registration',
        element: <AuthRegistrationPage/>,
      },
    ],
  },
];
