import React from "react";

import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react";

const Footer: React.FC = function () {
  const color = useColorModeValue("mauve.light.300", "mauve.dark.100");
  const background = useColorModeValue("mauve.light.1200", "mauve.dark.1200");

  return (
    <Box
      pos="absolute"
      left="50%"
      bottom={0}
      transform="translate(-50%, 50%)"
      px="24px"
      bgColor={background}
      color={color}
      fontSize="14px"
      fontWeight="semibold"
      whiteSpace="nowrap"
    >
      Made with ❤️ by{" "}
      <Link href="https://meluiz.com" target="_blank">
        <Text color="red.dark.300" as="span">
          me
        </Text>
        luiz
      </Link>
    </Box>
  );
};

export default Footer;
