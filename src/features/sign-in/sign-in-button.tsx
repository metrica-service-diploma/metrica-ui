import { toaster } from "@/components/ui/toaster";
import { routesList } from "@/constants/routes";
import { setAuthState } from "@/redux/modules/auth";
import { useSignInMutation } from "@/redux/services/api";
import type { SignInFormFieldValues } from "@/types/forms";
import { saveTokenInLocalStorage } from "@/utils/tokens";
import { Button } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SignInButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit } = useFormContext<SignInFormFieldValues>();
  const [login, { isLoading }] = useSignInMutation();

  const handleSignIn = async (data: SignInFormFieldValues) => {
    try {
      const { accessToken } = await login(data).unwrap();

      saveTokenInLocalStorage({ accessToken });
      dispatch(setAuthState({ accessToken }));

      toaster.create({
        title: "Вход прошел успешно!",
        type: "success",
        closable: true,
        duration: 3000,
      });

      navigate(routesList.Dashboard);
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
    <Button onClick={handleSubmit(handleSignIn)} loading={isLoading}>
      Вход
    </Button>
  );
};
