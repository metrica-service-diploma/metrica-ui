import type { User } from "../models/user";

export type SignUpRequest = {
  email: string;
  password: string;
  username: string;
};

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  accessToken: string;
  user: User;
};
