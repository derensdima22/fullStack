import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthLoginRequestValue, AuthResponse } from '../types';
import { authChecked, authEdit, authLogin, authLogout, authRegistration } from '../fetches';
import { BaseAsyncThunkOptions } from '@core/types/store';

export const authLoginRequest = createAsyncThunk<
  AuthResponse,
  AuthLoginRequestValue,
  BaseAsyncThunkOptions
>(
  'auth/login',
  async (data, thunkApi) => {
    try {
      const response = await authLogin(data);
      localStorage.setItem('token', response.data.accessToken);
      console.log('response', response);

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
      localStorage.setItem('token', response.data.accessToken);

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

      return void response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const authEditRequest = createAsyncThunk<
  AuthResponse,
  AuthLoginRequestValue,
  BaseAsyncThunkOptions
>(
  'auth/edit',
  async (data, thunkApi) => {
    try {
      const response = await authEdit(data);
      console.log('response', response);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
