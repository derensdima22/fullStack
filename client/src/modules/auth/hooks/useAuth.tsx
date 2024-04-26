import { useAppDispatch, useAppSelector } from '@app/store';
import { useCallback, useMemo } from 'react';
import {
  authCheckRequest,
  authEditRequest,
  authLoginRequest,
  authLogoutRequest,
  authRegistrationRequest,
  authSlice,
  authUserRequest
} from '@modules/auth/store';
import { debounce } from 'lodash';
import { AuthIncompleteRegistrationFormValues, AuthLoginValue, AuthPermissionsCompareType, UseAuthReturn } from '@modules/auth/types';
import { CorePermissions, ModalFormProfileValues } from '@core/types';

export const useAuth = (): UseAuthReturn => {
  const status = useAppSelector((store) => store.auth.status);
  const user = useAppSelector((store) => store.auth.user);
  const isAuth = useAppSelector((store) => store.auth.isAuth);
  const checked = useAppSelector((store) => store.auth.checked);
  const form = useAppSelector((store) => store.auth.form);
  const permissions = useAppSelector((store) => store.auth.permissions);
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

  const load = useCallback((id: string) => {
    return dispatch(authUserRequest(id)).unwrap();
  }, [dispatch]);

  const isAll = useMemo(() =>
      permissions?.some((item) => item === CorePermissions.All) ?? false,
    [permissions],
  );

  // check permissions
  const can = useCallback((required: string[], compare: AuthPermissionsCompareType = 'every') =>
    !!permissions && (isAll || required[compare]((item) => permissions?.includes(item))),
  [permissions]);

  const saveForm = useCallback((value: AuthIncompleteRegistrationFormValues) => {
    const saveDebounce = debounce(() => {
      dispatch(authSlice.actions.setFormValues(value));
    }, 400);

    saveDebounce();

    return () => {
      saveDebounce.cancel();
    };
  }, []);

  const edit = useCallback((value: ModalFormProfileValues) => {
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
    saveForm,
    load,
    can
  };
};
