import { combineReducers, configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung";

const rootReducer = combineReducers({
  quanLyNguoiDungReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
