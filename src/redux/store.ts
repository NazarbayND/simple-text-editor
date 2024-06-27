import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import editorReducer from "./editorSlice";
import { EDITOR_STATE_LS_KEY } from "../constants";

const persistConfig = {
  key: EDITOR_STATE_LS_KEY,
  storage,
};

const persistedReducer = persistReducer(persistConfig, editorReducer);

const store = configureStore({
  reducer: {
    editor: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
