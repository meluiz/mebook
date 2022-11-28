import React from "react";

import { BubbleMenu, Editor } from "@tiptap/react";
import { animateFill } from "tippy.js";

import Content from "./content";

interface ComponentProps {
  editor: Editor;
}

const Component: React.FC<ComponentProps> = function ({ editor }) {
  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{
        maxWidth: "none",
        duration: 300,
        delay: 100,
        animateFill: true,
        hideOnClick: false,
        followCursor: true,
        plugins: [animateFill]
      }}
    >
      <Content editor={editor} />
    </BubbleMenu>
  );
};

export default Component;
