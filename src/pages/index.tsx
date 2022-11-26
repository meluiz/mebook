import React from "react";

import type { NextPage } from "next";

import { useColorMode } from "@chakra-ui/react";

const Page: NextPage = function () {
  const { toggleColorMode } = useColorMode();
  return (
    <div>
      <p>meluiz</p>
      <button onClick={toggleColorMode}>Toggle theme</button>
    </div>
  );
};

export default Page;
