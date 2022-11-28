import React from "react";

import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

interface ComponentProps {
  children: React.ReactNode;
  label: string;
}

const Component: React.FC<ComponentProps> = function ({ label, children }) {
  const color = useColorModeValue("mauve.light.400", "mauve.dark.300");

  return (
    <Stack display="block" pos="relative" spacing={0} role="group">
      <Box w="full" display="block" pos="relative" p="0.3em 0.4em">
        <Text
          color={color}
          textTransform="uppercase"
          letterSpacing="0.0625rem"
          fontSize="11px"
          fontWeight="medium"
        >
          {label}
        </Text>
      </Box>
      <Box display="block" pos="relative">
        {children}
      </Box>
    </Stack>
  );
};

export default Component;
