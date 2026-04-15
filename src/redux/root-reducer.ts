import { combineReducers } from "redux";
import { authSlice } from "./modules/auth";
import { apiSlice } from "./services/api";
import { dashboardSlice } from "./modules/dashboard";

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [dashboardSlice.name]: dashboardSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
