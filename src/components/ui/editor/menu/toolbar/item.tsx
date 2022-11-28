import React from "react";

import { Stack } from "@chakra-ui/react";

interface ComponentProps {
  children: React.ReactNode;
}

const Component: React.FC<ComponentProps> = function ({ children }) {
  return (
    <Stack direction="row" spacing="2px" role="group">
      {children}
    </Stack>
  );
};

export default Component;
