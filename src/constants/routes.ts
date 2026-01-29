export const publicRoutes = {
  SignIn: "/sign-in",
  SignUp: "/sign-up",
};

export const privateRoutes = {
  Root: "/",
  App: "/app",
  Dashboard: "/app/dashboard",
  Websites: "/app/websites",
};

export const routesList = {
  ...publicRoutes,
  ...privateRoutes,
};
