import { useAuth } from '@modules/auth/hooks';
import { AuthElementPermissionsProps } from '@modules/auth/types';
import React, { ReactElement } from 'react';

export const ElementPermissions = (props: AuthElementPermissionsProps): ReactElement => {
  const { permissions, children, compare } = props;
  const { can } = useAuth();

  return <>{can(permissions, compare) && children}</>;
};
