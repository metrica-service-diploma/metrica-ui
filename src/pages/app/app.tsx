import { SignOutMenu } from "@/features/user-settings";
import { Flex, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const App = () => (
  <Flex direction="column" height="100%">
    <Flex
      as="nav"
      align="center"
      width="100%"
      justify="space-between"
      padding="0.5rem 1.5rem"
      bg="purple.700"
      color="white"
    >
      <Heading as="h2" fontWeight="normal" size="lg">
        Сервис метрики
      </Heading>
      <SignOutMenu />
    </Flex>
    <Outlet />
  </Flex>
);
