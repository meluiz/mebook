import React from "react";

import { Stack, useColorModeValue } from "@chakra-ui/react";

interface ComponentProps {
  children: React.ReactNode;
}

const Component: React.FC<ComponentProps> = function ({ children }) {
  const contentBorder = useColorModeValue("mauve.light.700", "mauve.dark.700");
  const contentBg = useColorModeValue("mauve.light.1200", "mauve.dark.1000");

  return (
    <Stack
      minW="128px"
      maxW="224px"
      rounded=".25em"
      border="1px solid"
      borderColor={contentBorder}
      shadow="md"
      p="0.25rem"
      overflow="hidden"
      bgColor={contentBg}
      zIndex={10000}
    >
      {children}
    </Stack>
  );
};

export default Component;
