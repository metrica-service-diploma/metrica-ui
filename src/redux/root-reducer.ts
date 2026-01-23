import { combineReducers } from "redux";
import { authSlice } from "./modules/auth";
import { apiSlice } from "./services/api";

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
