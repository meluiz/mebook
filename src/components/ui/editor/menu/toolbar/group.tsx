import React from "react";

import { Stack } from "@chakra-ui/react";

interface ComponentProps {
  children: React.ReactNode;
}

const Component: React.FC<ComponentProps> = function ({ children }) {
  return (
    <Stack direction="row" spacing={0} role="toolbar" tabIndex={-1}>
      {children}
    </Stack>
  );
};

export default Component;
