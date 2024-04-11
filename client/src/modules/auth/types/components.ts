import { RequestStatus } from '@core/types/store';
import { AuthLoginValue, AuthRegistrationValue } from '@modules/auth/types';

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

