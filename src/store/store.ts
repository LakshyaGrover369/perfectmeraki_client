import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice"; // <-- add this

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer, // <-- add this
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
