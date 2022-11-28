import React from "react";

import { Editor } from "@tiptap/react";

import { Box } from "@chakra-ui/react";

import type { ToolbarData } from "../data";
import Button from "./button";

interface ComponentProps {
  editor: Editor;
  data: ToolbarData[];
}

const Component: React.FC<ComponentProps> = function ({ editor, data }) {
  return (
    <Box display="block" pos="relative">
      {data.map(({ action, icon: Icon, active, label }, index) => (
        <Button
          key={`toolbar-group-${index}-item`}
          title={label}
          onClick={() => action(editor)}
          isActive={active(editor)}
          children={<Icon size={16} weight="bold" />}
        />
      ))}
    </Box>
  );
};

export default Component;
