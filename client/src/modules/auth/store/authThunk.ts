import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthEditRequestValue, AuthLoginRequestValue, AuthResponse } from '@modules/auth/types';
import { authChecked, authEdit, authGetUser, authLogin, authLogout, authRegistration } from '@modules/auth/fetches';
import { BaseAsyncThunkOptions } from '@core/types/store';
import { UserType } from '@app/models/UserType';

export const authLoginRequest = createAsyncThunk<
  AuthResponse,
  AuthLoginRequestValue,
  BaseAsyncThunkOptions
>(
  'auth/login',
  async (data, thunkApi) => {
    try {
      const response = await authLogin(data);

      if (data.rememberMe) {
        localStorage.setItem('token', response.data.accessToken);
      } else {
        sessionStorage.setItem('token', response.data.accessToken);
      }

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const authRegistrationRequest = createAsyncThunk<
  AuthResponse,
  AuthLoginRequestValue,
  BaseAsyncThunkOptions
>(
  'auth/registration',
  async (data, thunkApi) => {
    try {
      const response = await authRegistration(data);

      if (data.rememberMe) {
        localStorage.setItem('token', response.data.accessToken);
      } else {
        sessionStorage.setItem('token', response.data.accessToken);
      }

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const authCheckRequest = createAsyncThunk<
  AuthResponse,
  undefined,
  BaseAsyncThunkOptions
>(
  'auth/checked',
  async (_, thunkApi) => {
    try {
      const response = await authChecked();
      localStorage.setItem('token', response.data.accessToken);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const authLogoutRequest = createAsyncThunk<
  undefined,
  undefined,
  BaseAsyncThunkOptions
>(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const response = await authLogout();
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');

      return void response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const authUserRequest = createAsyncThunk<
  UserType,
  string,
  BaseAsyncThunkOptions
>(
  'auth/user',
  async (id, thunkApi) => {
    try {
      const response = await authGetUser(id);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const authEditRequest = createAsyncThunk<
  AuthResponse,
  AuthEditRequestValue,
  BaseAsyncThunkOptions
>(
  'auth/edit',
  async (data, thunkApi) => {
    try {
      const response = await authEdit(data);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
