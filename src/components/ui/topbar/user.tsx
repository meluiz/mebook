import { Fragment } from "react";

import topbar from "@data/topbar";
import { useTheme } from "@emotion/react";
import Avatar, { genConfig, AvatarFullConfig } from "react-nice-avatar";

import {
  Button,
  Divider,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Stack,
  StyleFunctionProps,
  useBreakpointValue,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import NextLink from "next/link";

const Component: React.FC = function () {
  const { colorMode } = useColorMode();
  const { colors } = useTheme() as StyleFunctionProps;
  const iconSize = useBreakpointValue({ base: 16, lg: 18 });

  const isLight = colorMode === "light";
  const background = useColorModeValue("mauve.light.1200", "mauve.dark.1100");

  const config = {
    sex: "woman",
    faceColor: "#F9C9B6",
    earSize: "small",
    eyeStyle: "oval",
    noseStyle: "round",
    mouthStyle: "smile",
    shirtStyle: "polo",
    glassesStyle: "round",
    hairColor: "#fff",
    hairStyle: "thick",
    hatStyle: "none",
    hatColor: "#FC909F",
    eyeBrowStyle: "upWoman",
    shirtColor: "#fff",
    bgColor: isLight ? colors.red.light["600"] : colors.red.dark["300"],
    shape: "square"
  } as AvatarFullConfig;

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          w="40px"
          h="40px"
          rounded="full"
          px={0}
          filter="grayscale(1)"
          variant="reset"
        >
          <Avatar
            {...genConfig(config)}
            style={{ width: "100%", height: "100%" }}
          />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          w={{ base: "220px", lg: "256px" }}
          mt="8px"
          mr="8px"
          bgColor={background}
        >
          <PopoverArrow rounded="1px" ml="4px" bgColor={background} />
          <PopoverBody p={0}>
            <List p="16px 0 8px">
              {topbar.map((group, index) => (
                <Fragment key={`topbar-group-${index}`}>
                  {index !== 0 ? <Divider my="8px" /> : null}
                  {group.map(({ id, icon: Icon, name, location }) => (
                    <ListItem
                      key={`topbar-group-item-${id}`}
                      fontSize={{ base: "12px", lg: "14px" }}
                    >
                      <NextLink href={location} passHref legacyBehavior>
                        <Stack
                          direction="row"
                          align="center"
                          p={{ base: "8px 24px", lg: "8px 32px" }}
                          color={isLight ? "mauve.light.200" : "mauve.dark.100"}
                          _hover={{
                            bgColor: isLight
                              ? "mauve.light.800"
                              : "mauve.dark.900"
                          }}
                          as="a"
                        >
                          {Icon ? <Icon size={iconSize} /> : null}
                          <span>{name}</span>
                        </Stack>
                      </NextLink>
                    </ListItem>
                  ))}
                </Fragment>
              ))}
            </List>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Component;
