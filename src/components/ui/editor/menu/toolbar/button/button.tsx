import React from "react";

import { Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";

interface ComponentProps extends ButtonProps {
  isActive: boolean;
}

const Component: React.FC<ComponentProps> = function ({ isActive, ...props }) {
  const buttonColor = useColorModeValue("mauve.light.200", "mauve.dark.200");
  const buttonBg = useColorModeValue("mauve.light.1000", "mauve.dark.900");
  const buttonActive = useColorModeValue("mauve.light.1000", "mauve.dark.800");

  return (
    <Button
      variant="reset"
      w="32px"
      h="32px"
      alignItems="center"
      justifyContent="center"
      rounded={0}
      p={0}
      color={buttonColor}
      role="button"
      tabIndex={-1}
      bgColor={isActive ? buttonActive : undefined}
      _hover={{ bgColor: buttonBg }}
      {...props}
    />
  );
};

export default Component;
