export default {
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
};
