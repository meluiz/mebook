import React from "react";

import dynamic from "next/dynamic";

import {
  Box,
  Container,
  Link,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";
import NextLink from "next/link";

const User = dynamic(() => import("./user"), { ssr: false });

const Topbar: React.FC = function () {
  const color = useColorModeValue("mauve.light.100", "mauve.dark.100");

  return (
    <Box w="full" h="auto" display="block" pos="relative" bg="inherit">
      <Container maxW="1440px">
        <Stack
          w="full"
          h="80px"
          direction="row"
          align="center"
          justify="space-between"
        >
          <NextLink href="/" legacyBehavior passHref>
            <Link
              color={color}
              fontSize="2xl"
              fontFamily="brand"
              _hover={{ textDecoration: "none" }}
            >
              mebook
            </Link>
          </NextLink>
          <Stack direction="row">
            <User />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Topbar;
