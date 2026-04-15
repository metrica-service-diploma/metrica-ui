import { getTokenFromLocalStorage } from "@/utils/tokens";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  accessToken: string | null;
};

export const initialState: AuthState = getTokenFromLocalStorage();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (
      state,
      {
        payload: { accessToken },
      }: PayloadAction<{
        accessToken: string;
      }>,
    ) => {
      state.accessToken = accessToken;
    },
    resetAuthState: (state) => {
      state.accessToken = null;
    },
  },
  selectors: {
    isAuthSelector: (state) => !!state.accessToken,
  },
});

export const { isAuthSelector } = authSlice.selectors;
export const { setAuthState, resetAuthState } = authSlice.actions;
