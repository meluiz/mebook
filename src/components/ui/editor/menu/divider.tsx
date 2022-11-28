import React from "react";

import { Box, useColorModeValue } from "@chakra-ui/react";

const Component: React.FC = function () {
  const border = useColorModeValue("mauve.light.800", "mauve.dark.700");

  return <Box w="1px" minW={0} pos="relative" bgColor={border} />;
};

export default Component;
