import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});

//export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
