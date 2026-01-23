import type { SignUpFormFieldValues } from "@/types/forms";
import { SignUpForm } from "@/features/sign-up/sign-up-form";
import { Box, Flex } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { SignUpButton } from "@/features/sign-up/sign-up-button";

const defaultSignUpFormValues: SignUpFormFieldValues = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export const SignUp = () => {
  const methods = useForm<SignUpFormFieldValues>({
    defaultValues: defaultSignUpFormValues,
    reValidateMode: "onBlur",
  });

  return (
    <Flex justify="center" align="center" height="100vh">
      <Box padding={4} maxWidth="400px" width="100%">
        <FormProvider {...methods}>
          <SignUpForm>
            <SignUpButton />
          </SignUpForm>
        </FormProvider>
      </Box>
    </Flex>
  );
};
