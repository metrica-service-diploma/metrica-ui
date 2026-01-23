import {
  EmailField,
  PasswordField,
  RepeatPasswordField,
  UsernameField,
} from "@/features/sign-up/sign-up-form-fields";
import { routesList } from "@/constants/routes";
import { Flex, Heading, LinkBox } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type SignUpFormProps = {
  children: React.ReactNode;
};

export const SignUpForm: React.FC<SignUpFormProps> = ({ children }) => (
  <Flex
    direction="column"
    borderRadius="xl"
    backgroundColor="white"
    padding="4"
  >
    <Heading alignSelf="center" marginBottom="4">
      Регистрация
    </Heading>
    <Flex direction="column" gapY={2} marginBottom="4">
      <UsernameField />
      <EmailField />
      <PasswordField />
      <RepeatPasswordField />
    </Flex>
    <Flex direction="column" gapY="2">
      {children}
      <LinkBox alignSelf="center">
        <Link to={routesList.SignIn}>Уже есть аккаунт? Вход</Link>
      </LinkBox>
    </Flex>
  </Flex>
);
