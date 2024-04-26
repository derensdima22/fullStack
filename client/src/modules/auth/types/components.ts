import { RequestStatus } from '@core/types/store';
import { AuthLoginValue, AuthPermissionsCompareType, AuthRegistrationValue } from '@modules/auth/types';
import { ReactElement, ReactNode } from 'react';

export interface AuthLoginFormProps {
  status: RequestStatus;
  className?: string;
  onSubmit?: (data: AuthLoginValue) => void;
}

export interface AuthLoginFormValues {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface AuthRegistrationFormProps {
  status?: RequestStatus;
  incompleteForm?: AuthIncompleteRegistrationFormValues;
  className?: string;
  onChange?: (value: AuthIncompleteRegistrationFormValues) => void;
  onSubmit?: (value: AuthRegistrationValue) => void;
}

export interface AuthIncompleteRegistrationFormValues {
  firstName?: string;
  email?: string;
  rememberMe?: boolean;
  terms?: boolean;
}

export interface AuthRegistrationFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  terms: boolean;
  rememberMe?: boolean;
}

export interface AuthElementPermissionsProps {
  children: ReactElement | ReactNode[];
  permissions: string[];
  compare?: AuthPermissionsCompareType;
}
