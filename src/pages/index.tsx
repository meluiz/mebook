import React from "react";

import type { NextPage } from "next";

import { Monitor } from "phosphor-react";

import {
  Button,
  Heading,
  Stack,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import Base from "@component/containers/home/base";

const Page: NextPage = function () {
  const { toggleColorMode } = useColorMode();

  const heading = useColorModeValue("mauve.dark.900", "mauve.dark.100");
  const text = useColorModeValue("mauve.dark.400", "mauve.dark.200");
  const strong = useColorModeValue("mauve.light.20", "mauve.dark.100");
  const button = {
    color: useColorModeValue("indigo.light.400", "indigo.dark.300"),
    border: useColorModeValue("indigo.light.500", "indigo.dark.500"),
    background: useColorModeValue("indigo.light.800", "indigo.dark.1200"),
    hover: {
      color: useColorModeValue("indigo.light.300", "indigo.dark.300"),
      border: useColorModeValue("indigo.light.500", "indigo.dark.400"),
      background: useColorModeValue("indigo.light.700", "indigo.dark.1000")
    },
    active: {
      color: useColorModeValue("indigo.light.300", "indigo.dark.300"),
      border: useColorModeValue("indigo.light.500", "indigo.dark.400"),
      background: useColorModeValue("indigo.light.600", "indigo.dark.900")
    }
  };

  return (
    <Base>
      <Stack
        maxW="512px"
        align="center"
        mx="auto"
        textAlign="center"
        spacing="32px"
      >
        <Stack align="center" spacing="16px">
          <Heading color={heading}>Write a note</Heading>
          <Text color={text} sx={{ strong: { color: strong } }}>
            An <strong>editor</strong>, a <strong>companion</strong>, a{" "}
            <strong>friend</strong>. In mebook, you <strong>write</strong> and{" "}
            <strong>share</strong> your notes for all. Write a script, novel,
            story, essay or poem. Write dreams, it&#39;s <strong>easy</strong>
          </Text>
        </Stack>
        <Button
          border="1px solid"
          borderColor={button.border}
          bgColor={button.background}
          color={button.color}
          fontWeight="normal"
          fontSize="14px"
          onClick={toggleColorMode}
          leftIcon={<Monitor size={18} />}
          _hover={{
            borderColor: button.hover.border,
            bgColor: button.hover.background,
            color: button.hover.color
          }}
          _active={{
            borderColor: button.active.border,
            bgColor: button.active.background,
            color: button.active.color
          }}
        >
          Show my workspace
        </Button>
      </Stack>
    </Base>
  );
};

export default Page;
