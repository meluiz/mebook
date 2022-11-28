import { mode } from "@chakra-ui/theme-tools";

import { StyleFunctionProps } from "@chakra-ui/react";

import editor from "./editor";

export default {
  global: (props: StyleFunctionProps) => ({
    "html, body": {
      color: mode("mauve.light.100", "mauve.dark.100")(props),
      bgColor: mode("mauve.light.1200", "mauve.dark.1200")(props)
    },
    ...editor(props)
  })
};
