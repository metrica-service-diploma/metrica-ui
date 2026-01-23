import { getTokenFromLocalStorage } from "@/utils/tokens";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  accessToken: string | null;
  // refreshToken: string | null;
  // expiresIn: number | null;
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
        // refreshToken: string;
        // expiresIn: number;
      }>,
    ) => {
      state.accessToken = accessToken;
      // state.refreshToken = refreshToken;
      // state.expiresIn = expiresIn;
    },
    resetAuthState: (state) => {
      state.accessToken = null;
      // state.refreshToken = null;
      // state.expiresIn = null;
    },
  },
  selectors: {
    isAuthSelector: (state) => !!state.accessToken,
  },
});

export const { isAuthSelector } = authSlice.selectors;
export const { setAuthState, resetAuthState } = authSlice.actions;
