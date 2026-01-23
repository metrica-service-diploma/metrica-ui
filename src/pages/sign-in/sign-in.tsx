import type { SignInFormFieldValues } from "@/types/forms";
import { SignInForm } from "@/features/sign-in/sign-in-form";
import { Box, Flex } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { SignInButton } from "@/features/sign-in/sign-in-button";

const defaultSignInFormValues: SignInFormFieldValues = {
  email: "",
  password: "",
};

export const SignIn = () => {
  const methods = useForm<SignInFormFieldValues>({
    defaultValues: defaultSignInFormValues,
    reValidateMode: "onBlur",
  });

  return (
    <Flex justify="center" align="center" height="100vh">
      <Box padding={4} maxWidth="400px" width="100%">
        <FormProvider {...methods}>
          <SignInForm>
            <SignInButton />
          </SignInForm>
        </FormProvider>
      </Box>
    </Flex>
  );
};
