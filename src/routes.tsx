import { Route, Routes } from "react-router-dom";
import { routesList } from "./constants/routes";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";

export const routes = (
  <Routes>
    <Route path={routesList.SignIn} element={<SignIn />} />
    <Route path={routesList.SignUp} element={<SignUp />} />
  </Routes>
);
