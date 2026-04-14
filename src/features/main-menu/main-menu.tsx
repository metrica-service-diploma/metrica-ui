import { toaster } from "@/components/ui/toaster";
import { routesList } from "@/constants/routes";
import { resetAuthState } from "@/redux/modules/auth";
import { apiSlice } from "@/redux/services/api";
import { removeTokenFromLocalStorage } from "@/utils/tokens";
import { IconButton, Menu, Portal, Separator } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const MainMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      removeTokenFromLocalStorage();
      dispatch(resetAuthState());
      // TODO: Добавить больше тегов при появлении
      dispatch(apiSlice.util.invalidateTags(["Website"]));

      navigate(routesList.SignIn);
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
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton size="2xs" variant="subtle">
          <FaRegUser />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Link to={routesList.Dashboard}>
              <Menu.Item value="dashboard" style={{ cursor: "pointer" }}>
                Дашборд
              </Menu.Item>
            </Link>
            <Link to={routesList.Websites}>
              <Menu.Item value="websites" style={{ cursor: "pointer" }}>
                Вебсайты
              </Menu.Item>
            </Link>
            <Separator />
            <Menu.Item
              value="sign-out"
              style={{ cursor: "pointer" }}
              onClick={handleSignOut}
            >
              Выход
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
