
import { Error404Page, ErrorBoundary } from '@core/pages';
import { SuspenseWrapper } from '@core/routes';
import { authRoutes } from '@modules/auth/AuthRoutes';
import { AuthGuard, RoleGuard } from '@modules/auth/guards';
import { AuthPermissionsCompareType } from '@modules/auth/types';
import { managerRoutes } from '@modules/manager/ManagerRoutes';
import { brandRoutes } from '@modules/brand/BrandRoutes';
import { ReactElement, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { RouteObject } from 'react-router/dist/lib/context';
import { profileRoutes } from '@modules/profile/ProfileRoutes';

const App = lazy(() => import('@app/App'));
const LayoutsModule = lazy(() => import('@layouts/LayoutsModule'));

const checkRoutePermissions = (routes: (RouteObject & {
  permissions?: string[];
  compare?: AuthPermissionsCompareType;
})[]): RouteObject[] => {
  return routes.map((route) => {
    const element = route.permissions ? (
      <RoleGuard permissions={route.permissions} compare={route.compare}>
        {route.element as ReactElement ?? <Outlet/>}
      </RoleGuard>
    ) : (
      route.element
    );

    delete route.permissions;
    delete route.compare;

    const children = route.children
      ? checkRoutePermissions(route.children)
      : route.children;

    return {
      ...route,
      children,
      element,
    } as RouteObject;
  });
};

export const appRoutes = createBrowserRouter(
  checkRoutePermissions([
    {
      errorElement: <ErrorBoundary/>,
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
            ...brandRoutes,
            ...profileRoutes
          ],
        },
        {
          path: '*',
          element: <Error404Page/>,
        },
      ],
    },
  ] as RouteObject[])
);

