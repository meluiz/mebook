import React from "react";

import type { NextPage } from "next";

import { useColorMode } from "@chakra-ui/react";
import Editor from "@component/ui/editor";

const Page: NextPage = function () {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Editor />
    </div>
  );
};

export default Page;
