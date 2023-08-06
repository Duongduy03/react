import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";
import { useDispatch } from "react-redux";
const store = configureStore({
  reducer: {
    user: authSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
