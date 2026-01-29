import { Route, Routes } from "react-router-dom";
import { routesList } from "./constants/routes";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Websites } from "./pages/websites";
import { Layout } from "./components/layout";
import { App } from "./pages/app";
import { Dashboard } from "./pages/dashboard";

export const routes = (
  <Routes>
    <Route path={routesList.Root} element={<Layout />}>
      <Route path={routesList.App} element={<App />}>
        <Route path={routesList.Websites} element={<Websites />} />
        <Route path={routesList.Dashboard} element={<Dashboard />} />
      </Route>
      <Route path={routesList.SignIn} element={<SignIn />} />
      <Route path={routesList.SignUp} element={<SignUp />} />
    </Route>
  </Routes>
);
