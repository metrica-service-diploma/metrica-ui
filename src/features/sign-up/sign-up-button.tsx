import { useSignUpMutation, useSignInMutation } from "@/redux/services/api";
import type { SignUpFormFieldValues } from "@/types/forms";
import { Button } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { toaster } from "@/components/ui/toaster";
// import { useNavigate } from "react-router-dom";
// import { routesList } from "@/constants/routes";
import { setAuthState } from "@/redux/modules/auth";
import { useDispatch } from "react-redux";
import { saveTokenInLocalStorage } from "@/utils/tokens";

export const SignUpButton = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit } = useFormContext<SignUpFormFieldValues>();

  const [register, { isLoading: isRegistering }] = useSignUpMutation();
  const [login, { isLoading: isLogging }] = useSignInMutation();

  const handleSignUp = async ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    repeatPassword: _,
    ...values
  }: SignUpFormFieldValues) => {
    try {
      const { email } = await register(values).unwrap();
      const { accessToken } = await login({
        email,
        password: values.password,
      }).unwrap();

      saveTokenInLocalStorage({ accessToken });
      dispatch(setAuthState({ accessToken }));

      toaster.create({
        title: "Регистрация прошла успешно!",
        type: "success",
        closable: true,
        duration: 3000,
      });

      // navigate(routesList.Boards);
    } catch (error) {
      const errorMessage = error?.data?.error;

      toaster.create({
        title: errorMessage ?? "There was an error!",
        type: "error",
        closable: true,
        duration: 3000,
      });
    }
  };

  return (
    <Button
      onClick={handleSubmit(handleSignUp)}
      loading={isRegistering || isLogging}
    >
      Зарегистрироваться
    </Button>
  );
};
