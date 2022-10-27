import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Container: { variants: { fluid: { height: "100%" } } },
    Button: {
      _focus: { outline: "none" },
      variants: {
        reset: {
          colorScheme: "transparent",
          w: "auto",
          h: "auto",
          minW: "auto",
          minH: "auto",
          border: "none",
          borderColor: "transparent",
          rounded: 0,
          color: "black"
        }
      }
    },
    Link: {
      textDecoration: "none",
      _hover: { textDecoration: "none" },
      _focus: { outline: "none" }
    }
  },
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
    "3xl": "112em" // 1792px
  }
});

export default theme;
