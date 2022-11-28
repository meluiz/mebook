import React, { ForwardRefExoticComponent, RefAttributes } from "react";

import { Check, IconProps } from "phosphor-react";

import {
  Box,
  Button,
  ButtonProps,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";

interface ComponentProps extends ButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

const Component: React.FC<ComponentProps> = function ({
  icon: Icon,
  isActive,
  children,
  ...rest
}) {
  const color = useColorModeValue("mauve.light.200", "mauve.dark.200");
  const border = useColorModeValue("mauve.light.700", "mauve.dark.600");
  const background = useColorModeValue("mauve.light.1200", "mauve.dark.900");
  const backgroundHover = useColorModeValue(
    "mauve.light.1000",
    "mauve.dark.900"
  );

  return (
    <Button
      w="full"
      alignItems="center"
      justifyContent="space-between"
      rounded="0.25rem"
      spacing="8px"
      p="0.4em 0.4em"
      color={color}
      fontSize="13px"
      fontWeight="normal"
      _hover={{ bgColor: backgroundHover }}
      variant="reset"
      {...rest}
    >
      <Flex align="center" justify="center">
        <Flex
          w="20px"
          h="20px"
          rounded="sm"
          align="center"
          justify="center"
          border="1px solid"
          borderColor={border}
          bgColor={background}
        >
          <Icon size={14} weight="bold" />
        </Flex>
      </Flex>
      <Box w="full" pos="relative" ml="8px">
        <Text w="full" fontWeight="normal" textAlign="left">
          {children}
        </Text>
      </Box>
      <Flex align="center" justify="center" ml="12px">
        <Flex
          w="20px"
          h="20px"
          align="center"
          justify="center"
          shrink={0}
          as="span"
        >
          {isActive ? <Check size={16} weight="bold" /> : null}
        </Flex>
      </Flex>
    </Button>
  );
};

export default Component;
