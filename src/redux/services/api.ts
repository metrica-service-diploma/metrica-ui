import type {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
} from "@/types/api/auth";
import type { User } from "@/types/models/User";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5193/api/",
    prepareHeaders: (headers, { endpoint, arg }) => {
      // TODO: Что будет, если токен не валиден?

      const publicEndpoints = ["sign-up", "sign-in"];
      const isPublicEndpoint = publicEndpoints.some(
        (publicEndpoint) =>
          endpoint.includes(publicEndpoint) ||
          arg?.url?.includes(publicEndpoint),
      );

      if (!isPublicEndpoint) {
        const token = localStorage.getItem("accessToken");

        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Авторизация
    signUp: builder.mutation<User, SignUpRequest>({
      query: (credentials) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: credentials,
      }),
    }),

    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (credentials) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  // Авторизация
  useSignUpMutation,
  useSignInMutation,
} = apiSlice;
