import { UserType } from '@app/models/UserType';
import { ModalFormProfileValues, RequestStatus } from '@core/types';
import { AuthIncompleteRegistrationFormValues, AuthResponse } from '@modules/auth/types';

export interface UseAuthReturn {
  form: AuthIncompleteRegistrationFormValues;
  checked: boolean;
  status: RequestStatus;
  user: UserType;
  isAuth: boolean;
  login: (value: AuthLoginValue) => Promise<AuthResponse>;
  registration: (value: AuthRegistrationValue) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  check: () => Promise<AuthResponse>;
  saveForm: (value: AuthIncompleteRegistrationFormValues) => void;
  edit: (value: ModalFormProfileValues) => Promise<AuthResponse>;
  load: (id: string) => void;
  can: (required: string[], compare?: AuthPermissionsCompareType) => boolean;
}

export interface AuthLoginValue {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface AuthRegistrationValue {
  email: string;
  password: string;
  firstName: string;
  rememberMe?: boolean;
}

export type AuthPermissionsCompareType = 'some' | 'every';
