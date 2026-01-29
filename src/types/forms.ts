export type SignUpFormFieldValues = {
  username: string;
  fullName?: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type SignInFormFieldValues = {
  email: string;
  password: string;
};

export type CreateWebsiteFieldValues = {
  name: string;
  domain: string;
};
