import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteAuthToken, getAuthToken, setAuthToken } from 'tools/helpers';
import { ServerAuthResponse } from 'dtos/auth';

import { AuthState } from './types';

const initialState: AuthState = {
  userId: null,
  isInit: !!getAuthToken(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    enter(state, action: PayloadAction<ServerAuthResponse>) {
      state.userId = action.payload.userId;
      setAuthToken(action.payload.token);
      state.isInit = true;
    },
    logout(state) {
      deleteAuthToken();
      state.isInit = false;
      state.userId = null;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { enter, logout } = authSlice.actions;
