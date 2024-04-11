import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthGuardProps } from '../types';

export const AuthGuard = ({ children: Component }: AuthGuardProps): ReactElement => {
  const token = localStorage.getItem('token');

  if (!token) {
    return (
      <Navigate
        to="/auth"
        replace
      />
    );
  }

  return Component;
};
