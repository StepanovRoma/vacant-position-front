import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteAuthToken, getAuthToken, setAuthToken } from 'tools/helpers';
import { ServerAuthResponse } from 'dtos/auth';
import { ServerUserMeResponse } from 'dtos/user';

import { AuthState } from './types';

const initialState: AuthState = {
  user: null,
  isInit: !!getAuthToken(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    enter(state, action: PayloadAction<ServerAuthResponse>) {
      setAuthToken(action.payload.token);
      state.isInit = true;
    },
    logout(state) {
      deleteAuthToken();
      state.isInit = false;
      state.user = null;
    },
    setUser(state, action: PayloadAction<ServerUserMeResponse>) {
      state.user = { ...action.payload.user };
    },
  },
});

export const authReducer = authSlice.reducer;

export const { enter, logout, setUser } = authSlice.actions;
