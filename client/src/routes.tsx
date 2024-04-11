
import { SuspenseWrapper } from '@core/routes';
import { authRoutes } from '@modules/auth/AuthRoutes';
import { AuthGuard } from '@modules/auth/guards';
import { managerRoutes } from '@modules/manager/ManagerRoutes';
import { usersRoutes } from '@modules/users/UsersRoutes';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouteObject } from 'react-router/dist/lib/context';

const App = lazy(() => import('@app/App'));
const LayoutsModule = lazy(() => import('@layouts/LayoutsModule'));

export const appRoutes = createBrowserRouter(
  [
    {
      // errorElement: <ErrorBoundary/>,
      // path: '/',
      element: (
        <SuspenseWrapper>
          <App/>
        </SuspenseWrapper>
      ),
      children: [
        ...authRoutes,
        {
          path: '/',
          element: (
            <SuspenseWrapper>
              <AuthGuard>
                <LayoutsModule/>
              </AuthGuard>
            </SuspenseWrapper>
          ),
          children: [
            ...managerRoutes,
            ...usersRoutes
          ],
        },
        {
          path: '*',
          // element: <Error404Page/>,
        },
      ],
    },
  ] as RouteObject[]
);

