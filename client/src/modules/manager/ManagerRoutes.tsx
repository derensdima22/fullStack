import { SuspenseWrapper } from '@core/routes';
import { lazy } from 'react';

const ManagerModule = lazy(() => import('@modules/manager/ManagerModule'));

export const managerRoutes = [
  {
    path: 'manager',
    element: <SuspenseWrapper><ManagerModule/></SuspenseWrapper>,
    children: [],
  },
];
