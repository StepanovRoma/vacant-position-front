import { RootState } from 'store';

export const selectIsAuth = (state: RootState) => !!state.auth.user;

export const selectMeId = (state: RootState) => {
  return state.auth.user?.id;
};

export const selectRole = (state: RootState) => {
  return state.auth.user?.role;
};

export const selectImage = (state: RootState) => {
  return state.auth.user?.image;
};

export const selectUserCity = (state: RootState) => {
  return state.auth.user?.city;
};
