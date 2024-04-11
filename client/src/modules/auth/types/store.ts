import { UserType } from '@app/models/UserType';
import { RequestStatus } from '@core/types/store';
import { AuthIncompleteRegistrationFormValues, AuthLoginFetchDataValue } from '@modules/auth/types';

export interface AuthSLiceState {
  user: UserType;
  isAuth: boolean;
  status: RequestStatus;
  checked: boolean;
  form: AuthIncompleteRegistrationFormValues;
}

export interface AuthLoginRequestValue extends AuthLoginFetchDataValue {
}
