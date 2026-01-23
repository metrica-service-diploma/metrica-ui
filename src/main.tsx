import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { store } from "./redux/store";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { Provider } from "react-redux";

const customConfig = defineConfig({
  globalCss: {
    html: {
      height: "100%",
      scrollBehavior: "smooth",
    },
    body: {
      height: "100%",
    },
    "#root": {
      height: "100%",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={createSystem(defaultConfig, customConfig)}>
      <Provider store={store}>
        <BrowserRouter>{routes}</BrowserRouter>
      </Provider>
    </ChakraProvider>
  </StrictMode>,
);
