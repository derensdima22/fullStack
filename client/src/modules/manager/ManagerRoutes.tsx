import { SuspenseWrapper } from '@core/routes';
import { lazy } from 'react';
import { ManagerPage } from '@modules/manager/pages';
import { ManagerPermissions } from '@modules/manager/types';

const ManagerModule = lazy(() => import('@modules/manager/ManagerModule'));

export const managerRoutes = [
  {
    path: 'manager',
    element: <SuspenseWrapper><ManagerModule/></SuspenseWrapper>,
    permissions: [ManagerPermissions.read],
    children: [
      {
        index: true,
        element: <ManagerPage/>
      },
      {
        path: 'users',
        element: <ManagerPage/>,
      },
      {
        path: 'channels',
        element: <ManagerPage/>,
      },
      {
        path: 'profile',
        element: <ManagerPage/>,
      },
      {
        path: 'balance',
        element: <ManagerPage/>,
      },
    ],
  },
];
