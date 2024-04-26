import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthGuardProps } from '../types';

export const AuthGuard = ({ children: Component }: AuthGuardProps): ReactElement => {
  const { pathname, search } = useLocation();
  const token = localStorage.getItem('token');
  const tokenSession = sessionStorage.getItem('token');

  if (!token) {
    return (
      <Navigate
        to="/auth"
        replace
        state={{
          from: pathname + search ?? '',
        }}
      />
    );
  }

  return Component;
};
