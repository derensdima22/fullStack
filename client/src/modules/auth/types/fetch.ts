import { UserType } from '@app/models/UserType';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: UserType;
}

export interface AuthLoginFetchDataValue {
  email: string;
  password?: string;
  rememberMe?: boolean;
  permissions?: string[];
  name?: string;
  address?: string;
}

export interface AuthEditFetchDataValue extends Omit<AuthLoginFetchDataValue, 'password' | 'email'> {
  id: string;
}
