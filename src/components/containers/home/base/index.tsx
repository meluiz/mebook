import React from "react";

import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import Footer from "@component/containers/home/footer";
import Topbar from "@component/ui/topbar";

interface ComponentProps {
  children: React.ReactNode;
}

const Base: React.FC<ComponentProps> = function ({ children }) {
  const border = useColorModeValue("mauve.light.800", "mauve.dark.800");

  return (
    <Box w="full" display="block" pos="relative">
      <Topbar />
      <Stack w="full" h="calc(100vh - 240px)" align="center" justify="center">
        <Container maxW="1280px" px="32px">
          <Box
            w="full"
            borderY={{ lg: "1px solid" }}
            borderColor={{ lg: border }}
            pos="relative"
            py="64px"
          >
            <Box
              w="full"
              borderX={{ lg: "1px solid" }}
              borderColor={{ lg: border }}
              p={{ base: "8px 0", lg: "8px 32px" }}
            >
              {children}
            </Box>
            <Footer />
          </Box>
        </Container>
      </Stack>
    </Box>
  );
};

export default Base;
