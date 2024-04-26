import { SuspenseWrapper } from '@core/routes';
import { lazy } from 'react';

const BrandModule = lazy(() => import('@modules/brand/BrandModule'));

export const brandRoutes = [
  {
    path: 'brand',
    element: <SuspenseWrapper><BrandModule/></SuspenseWrapper>,
    children: [],
  },
];
