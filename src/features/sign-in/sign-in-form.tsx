import {
  EmailField,
  PasswordField,
} from "@/features/sign-in/sign-in-form-fields";
import { routesList } from "@/constants/routes";
import { Flex, Heading, LinkBox } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type SignInFormProps = {
  children: React.ReactNode;
};

export const SignInForm: React.FC<SignInFormProps> = ({ children }) => (
  <Flex
    direction="column"
    borderRadius="xl"
    backgroundColor="white"
    padding="4"
  >
    <Heading alignSelf="center" marginBottom="4">
      Вход
    </Heading>
    <Flex direction="column" gapY="2" marginBottom="4">
      <EmailField />
      <PasswordField />
    </Flex>
    <Flex direction="column" gapY="2">
      {children}
      <LinkBox alignSelf="center">
        <Link to={routesList.SignUp}>Еще нет аккаунта? Регистрация</Link>
      </LinkBox>
    </Flex>
  </Flex>
);
