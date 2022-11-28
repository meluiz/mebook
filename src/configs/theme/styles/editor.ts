import { mode } from "@chakra-ui/theme-tools";

import { StyleFunctionProps } from "@chakra-ui/react";

export default (props: StyleFunctionProps) => ({
  "[data-tippy-root]": { shadow: "md", rounded: "md" },
  ".ProseMirror-focused": { outline: "none !important" },
  ".mebook": {
    transition: "all 100ms ease",

    "&.mb": {
      "&-empty": {
        _before: {
          content: "attr(data-placeholder)",
          h: 0,
          opacity: 0.375,
          cursor: "text",
          pointerEvents: "none",
          float: "left"
        }
      },

      "&-paragraph": {
        opacity: 0.44,
        lineHeight: "1.75rem",
        color: mode("mauve.dark.600", "mauve.light.600")(props),
        fontSize: "1rem",
        "&.focused": { opacity: 1 }
      },

      "&-heading": {
        opacity: 0.44,
        lineHeight: "1.75rem",
        color: mode("mauve.dark.600", "mauve.light.600")(props),
        fontWeight: "bold",

        "&.focused": { opacity: 1 },
        "&:is(h1)": { lineHeight: "2.25rem", fontSize: "1.75rem" },
        "&:is(h2)": { lineHeight: "2rem", fontSize: "1.5rem" },
        "&:is(h3)": { lineHeight: "1.75rem", fontSize: "1.25rem" }
      },

      "&-list": {
        pl: "1.875rem",

        "&.focused": { opacity: 1 },
        "> li": { mt: "0.25rem", "&::first-of-type": { mt: 0 } },
        "li::marker": {
          color: mode("mauve.light.400", "mauve.dark.600")(props)
        },

        "&.bullet li p": {
          color: mode("mauve.dark.600", "mauve.light.600")(props),
          fontSize: "1rem"
        },

        "&.ordered li p": {
          color: mode("mauve.dark.600", "mauve.light.600")(props),
          fontSize: "1rem"
        }
      },

      "&-code": {
        rounded: "sm",
        p: "0.25rem 0.5rem",
        bgColor: mode("mauve.light.800", "mauve.dark.1000")(props),
        color: mode("mauve.light.300", "mauve.dark.200")(props),
        fontSize: ".875em",
        fontFamily: "code",
        fontWeight: "medium",

        "&.block-code": {
          border: "1px solid",
          borderColor: mode("mauve.light.800", "mauve.dark.900")(props),
          rounded: "md",
          opacity: 0.56,
          p: "1rem",
          color: mode("mauve.light.200 ", "mauve.dark.200")(props),
          bgColor: mode("mauve.light.1100", "mauve.dark.1100")(props),
          fontFamily: "code",

          "&.focused": { opacity: 1 },
          ".hljs": {
            "&-number": {
              color: mode("orange.light.400 ", "orange.light.500")(props)
            },
            "&-string": {
              color: mode("orange.light.400 ", "orange.light.500")(props)
            },
            "&-comment": {
              color: mode("mauve.light.400 ", "maube.dark.500")(props)
            },
            "&-keyword": {
              color: mode("indigo.light.400 ", "indigo.dark.200")(props)
            },
            "&-title": {
              color: mode("orange.light.400 ", "orange.light.500")(props)
            }
          }
        }
      }
    }
  }
});
