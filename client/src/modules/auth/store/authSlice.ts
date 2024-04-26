import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '@app/models/UserType';
import { AuthSLiceState } from '../types';
import {
  authCheckRequest,
  authEditRequest,
  authLoginRequest,
  authRegistrationRequest,
  authUserRequest
} from '@modules/auth/store';

export const initialState: AuthSLiceState = {
  user: {} as UserType,
  permissions: [],
  isAuth: false,
  status: 'unset',
  checked: false,
  form: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFormValues: (state, action) => {
      state.form = action.payload;
    },
  },
  extraReducers: (builder) => {
    // -----------------------------------------------------------------------------------------------
    // @ LOGIN
    // -----------------------------------------------------------------------------------------------

    builder.addCase(authLoginRequest.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(authLoginRequest.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.permissions = payload.user.permissions;
      state.checked = true;
      state.user = payload.user;
    });

    builder.addCase(authLoginRequest.rejected, (state) => {
      state.status = 'error';
    });

        // -----------------------------------------------------------------------------------------------
    // @ CHECKED
    // -----------------------------------------------------------------------------------------------

    builder.addCase(authCheckRequest.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(authCheckRequest.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.permissions = payload.user.permissions;
      state.checked = true;
      state.user = payload.user;
    });

    builder.addCase(authCheckRequest.rejected, (state) => {
      state.status = 'error';
    });

    // -----------------------------------------------------------------------------------------------
    // @ EDIT
    // -----------------------------------------------------------------------------------------------

    builder.addCase(authEditRequest.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(authEditRequest.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.checked = true;
      state.user = payload.user;
    });

    builder.addCase(authEditRequest.rejected, (state) => {
      state.status = 'error';
    });

    // -----------------------------------------------------------------------------------------------
    // @ REGISTRATION
    // -----------------------------------------------------------------------------------------------

    builder.addCase(authRegistrationRequest.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(authRegistrationRequest.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.permissions = payload.user.permissions;
      state.checked = true;
      state.user = payload.user;
    });

    builder.addCase(authRegistrationRequest.rejected, (state) => {
      state.status = 'error';
    });

        // -----------------------------------------------------------------------------------------------
    // @ USER
    // -----------------------------------------------------------------------------------------------

    builder.addCase(authUserRequest.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(authUserRequest.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.permissions = payload.permissions;
      state.checked = true;
      state.user = payload;
    });

    builder.addCase(authUserRequest.rejected, (state) => {
      state.status = 'error';
    });
  }
});
