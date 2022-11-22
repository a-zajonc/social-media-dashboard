import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { switchAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  ColorModeScript,
  defineStyle,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {},
  thumb: {
    bg: "white",
    _checked: { bg: "#1E202A" },
  },
  track: {
    bg: "#AEB3CB",
    _checked: {
      bgGradient: "linear(to-r, #378FE6, #3EDA82)",
    },
    _hover: {
      bgGradient: "linear(to-r, #378FE6, #3EDA82)",
    },
  },
});

const switchTheme = defineMultiStyleConfig({ baseStyle });

const thick = defineStyle({
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: 20,
  borderColor: "#8B97C6",
  _dark: {
    borderColor: "#252A41",
  },
});

const dividerTheme = defineStyleConfig({
  thick,
  variants: {
    thick: thick,
  },
});

const breakpoints = {
  sm: "320px",
  md: "651px",
  lg: "1100px",
  xl: "1250px",
  "2xl": "1536px",
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        _dark: { bg: "#1E202A" },
      },
    },
  },
  fonts: {
    heading: `Inter`,
    body: `Inter`,
  },
  config,
  components: { Switch: switchTheme, Divider: dividerTheme },
  breakpoints,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
