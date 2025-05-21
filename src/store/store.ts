// src/app/store.ts
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice";
import sliderReducer from "../store/sliderSlice";
import pastorDeskReducer from "../store/pastorDeskSlice";
import eventReducer from "../store/eventSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    slider: sliderReducer,
    pastorDesk: pastorDeskReducer,
    events: eventReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "auth/login/pending",
          "auth/login/fulfilled",
          "auth/login/rejected",
        ],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
