import React from "react";

import { Stack } from "@chakra-ui/react";

interface ComponentProps {
  children: React.ReactNode;
}

const Component: React.FC<ComponentProps> = function ({ children }) {
  return (
    <Stack pos="relative" p="0.25em">
      {children}
    </Stack>
  );
};

export default Component;
