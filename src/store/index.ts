import {
  AnyAction,
  combineReducers,
  configureStore,
  Dispatch,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import moviesReducer from './movies/slice';

const persistConfiguration = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const persistedReducer = persistReducer(persistConfiguration, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    getDefaultMiddleware({
      // ignore dispatched action types by redux-persist per https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): ThunkDispatch<RootState, undefined, AnyAction> &
  Dispatch<AnyAction> => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
