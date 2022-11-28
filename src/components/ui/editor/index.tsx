import React from "react";

import { EditorContent, useEditor } from "@tiptap/react";

import { Box } from "@chakra-ui/react";

import extensions from "./extensions";
import Menu from "./menu";

const Editor: React.FC = function () {
  const editor = useEditor({
    extensions,
    content: `
      <h1>Welcome to mebook</h1>
      <h2>The simplest tool for all types of writers</h2>
      <p></p>
      <p>We believe that <strong>everyone has a writer inside them</strong>, just like you. You yourself are reading it. And <em>you</em> deserve a great and simplest tool. That's mebook ❤️.</p>
      <p></p>
      <p>In most cases, writing <strong>becomes collaborative</strong>. You invite editors or reviewers, you show your work to a friend or client, you send it to a publisher, you <strong>work</strong> with your team. And honestly, you don't know the magic of writing until you've tried it in mebook. <s>Yeah, we're biased.</s></p>
      <p></p>
      <p>And that's it.</p>
      <p></p>
      <p>Now get some writing done. Your words matter, to someone, somewhere, always. Care for them. Invite them. They're worth it.</p>
      <p></p>
      <p>All our love,</p>
      <p>the <strong>mebook</strong> team</p>
    `
  });

  return (
    <Box
      maxW="768px"
      mx="auto"
      p={{ base: "56px 1.5em", md: "112px 4em" }}
      fontFamily="mono"
    >
      {editor ? <Menu editor={editor} /> : null}
      <EditorContent spellCheck={true} editor={editor} />
    </Box>
  );
};

export default Editor;
