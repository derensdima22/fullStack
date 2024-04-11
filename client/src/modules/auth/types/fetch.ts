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
  name?: string;
  address?: string;
}
