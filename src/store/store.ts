import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from 'ducks/auth';
import { authApi } from 'ducks/auth/api';
import { userApi } from 'ducks/user/api';
import { tagsApi } from 'ducks/tags/api';
import { quoteApi } from 'ducks/quote/api';
import { dataApi } from 'ducks/data/api';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [quoteApi.reducerPath]: quoteApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      quoteApi.middleware,
      tagsApi.middleware,
      dataApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
