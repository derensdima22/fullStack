import { useAuth } from '@modules/auth/hooks';
import { AuthRoleGuardProps } from '@modules/auth/types';
import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const RoleGuard = (props: AuthRoleGuardProps): ReactElement => {
  const { permissions, children, compare = 'every' } = props;
  const { can } = useAuth();
  const { pathname, search } = useLocation();

  if (can(permissions, compare)) {
    return children;
  }

  return <Navigate to={pathname ?? '/'} replace state={{ from: pathname + search ?? '' }}/>;
};
