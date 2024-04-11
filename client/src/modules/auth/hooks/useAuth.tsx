import { useAppDispatch, useAppSelector } from '@app/store';
import { useCallback } from 'react';
import {
  authCheckRequest,
  authEditRequest,
  authLoginRequest,
  authLogoutRequest,
  authRegistrationRequest,
  authSlice
} from '@modules/auth/store';
import { debounce } from 'lodash';
import { AuthIncompleteRegistrationFormValues, AuthLoginValue, UseAuthReturn } from '@modules/auth/types';

export const useAuth = (): UseAuthReturn => {
  const status = useAppSelector((store) => store.auth.status);
  const user = useAppSelector((store) => store.auth.user);
  const isAuth = useAppSelector((store) => store.auth.isAuth);
  const checked = useAppSelector((store) => store.auth.checked);
  const form = useAppSelector((store) => store.auth.form);
  const dispatch = useAppDispatch();

  const login = useCallback((value: AuthLoginValue) => {
    return dispatch(authLoginRequest(value)).unwrap();
  }, [dispatch]);

  const registration = useCallback((value: AuthLoginValue) => {
    return dispatch(authRegistrationRequest(value)).unwrap();
  }, [dispatch]);

  const logout = useCallback(() => {
    return dispatch(authLogoutRequest()).unwrap();
  }, [dispatch]);

  const check = useCallback(() => {
    return dispatch(authCheckRequest()).unwrap();
  }, [dispatch]);

  const saveForm = useCallback((value: AuthIncompleteRegistrationFormValues) => {
    const saveDebounce = debounce(() => {
      dispatch(authSlice.actions.setFormValues(value));
    }, 400);

    saveDebounce();

    return () => {
      saveDebounce.cancel();
    };
  }, []);

  const edit = useCallback((value: any) => {
    return dispatch(authEditRequest(value)).unwrap();
  }, [dispatch]);

  return {
    status,
    user,
    isAuth,
    checked,
    form,
    login,
    registration,
    logout,
    check,
    edit,
    saveForm
  };
};
