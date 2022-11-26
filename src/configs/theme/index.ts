import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import breakpoints from "./breakpoints";
import colors from "./colors";
import components from "./components";
import fonts from "./fonts";
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true
};

const theme = extendTheme(config, {
  breakpoints,
  colors,
  components,
  fonts,
  styles
});

export default theme;
