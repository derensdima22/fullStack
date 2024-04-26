import { ReactElement } from 'react';
import { AuthPermissionsCompareType } from '@modules/auth/types';

export interface AuthGuardProps {
  children: ReactElement;
}

export interface AuthRoleGuardProps {
  children: ReactElement;
  permissions: string[];
  compare?: AuthPermissionsCompareType;
}
