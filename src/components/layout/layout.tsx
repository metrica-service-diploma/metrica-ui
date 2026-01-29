import { privateRoutes, routesList } from "@/constants/routes";
import { isAuthSelector } from "@/redux/modules/auth";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "../ui/toaster";

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuth = useSelector(isAuthSelector);

  // TODO: Проверка авторизации
  // TODO: Возможно, вынести логику роутинга в некий middleware

  useEffect(() => {
    const isPrivateRoute = Object.values(privateRoutes).includes(
      location.pathname,
    );

    if (isAuth && location.pathname === routesList.Root) {
      navigate(routesList.Websites);
    }

    if (!isAuth && isPrivateRoute) {
      navigate(routesList.SignIn);
    }
  }, [isAuth, location, navigate]);

  return (
    <Flex
      direction="column"
      minW="100vw"
      minH="100vh"
      height="100%"
      bg="purple.100"
    >
      <Outlet />
      <Toaster />
    </Flex>
  );
};
