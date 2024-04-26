import { SuspenseWrapper } from '@core/routes';
import { lazy } from 'react';
import { ProfilePermissions } from '@modules/profile/types';
import { ProfilePage } from '@modules/profile/pages';

const ProfileModule = lazy(() => import('@modules/profile/ProfileModule'));

export const profileRoutes = [
  {
    path: 'profile',
    element: <SuspenseWrapper><ProfileModule/></SuspenseWrapper>,
    permissions: [ProfilePermissions.read],
    children: [
      {
        index: true,
        element: <ProfilePage/>
      },
      {
        path: 'managers',
        element: <ProfilePage/>,
      },
      {
        path: 'managers:id',
        element: <ProfilePage/>,
      },
      {
        path: 'brand',
        element: <ProfilePage/>,
      },
      {
        path: 'affiliate',
        element: <ProfilePage/>,
      },
    ],
  },
];
