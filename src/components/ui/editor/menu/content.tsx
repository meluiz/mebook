import React, { Fragment } from "react";

import { Editor } from "@tiptap/react";

import { Box, useColorModeValue } from "@chakra-ui/react";

import Divider from "./divider";
import ToolbarButton from "./toolbar/button";
import data from "./toolbar/data";
import ToolbarGroup from "./toolbar/group";
import ToolbarSelect from "./toolbar/select";

interface ComponentProps {
  editor: Editor;
}

const Component: React.FC<ComponentProps> = function ({ editor }) {
  const contentBg = useColorModeValue("mauve.light.1200", "mauve.dark.1000");
  const contentBorder = useColorModeValue("mauve.light.800", "mauve.dark.700");

  return (
    <Box w="auto" minH={0} display="block" pos="relative" fontFamily="body">
      <Box
        w="full"
        h="full"
        display="block"
        rounded="0.25rem"
        border="1px solid"
        borderColor={contentBorder}
        bgColor={contentBg}
        pos="relative"
        overflow="hidden"
      >
        <Box w="auto" h="full" display="block" pos="relative">
          <ToolbarGroup>
            {data.map((group, index) => (
              <Fragment key={`toolbar-group-${index}`}>
                {index !== 0 ? <Divider /> : null}
                {group.type === "select" ? (
                  <ToolbarSelect
                    editor={editor}
                    placeholder={group.placeholder}
                    data={group.items}
                  />
                ) : null}
                {group.type === "button" ? (
                  <ToolbarButton editor={editor} data={group.items} />
                ) : null}
              </Fragment>
            ))}
          </ToolbarGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Component;
