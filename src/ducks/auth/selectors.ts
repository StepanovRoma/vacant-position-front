import { RootState } from 'store';

export const selectIsAuth = (state: RootState) => !!state.auth.user;

export const selectMeId = (state: RootState) => state.auth.user?.id;
