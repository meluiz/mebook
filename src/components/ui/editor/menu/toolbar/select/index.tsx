import React, { Fragment } from "react";

import Tippy from "@tippyjs/react";
import { Editor } from "@tiptap/react";
import { CaretDown } from "phosphor-react";

import { Divider, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import type { ToolbarData } from "../data";
import Content from "./content";
import Group from "./group";
import Item from "./item";
import Viewport from "./viewport";

interface ComponentProps {
  editor: Editor;
  placeholder: string;
  data: ToolbarData[][];
}

const Component: React.FC<ComponentProps> = function ({
  editor,
  placeholder,
  data
}) {
  const selectedBg = useColorModeValue("mauve.light.1000", "mauve.dark.900");
  const selectedText = useColorModeValue("mauve.light.200", "mauve.dark.200");
  const selectedIcon = useColorModeValue("mauve.light.500", "mauve.dark.200");

  function text(editor: Editor) {
    let label = placeholder;
    for (const group of data) {
      for (const item of group) {
        const isActive = item.active(editor);
        if (isActive) {
          label = item.label;
          break;
        }
      }
    }

    return label;
  }

  return (
    <Tippy
      appendTo={document.body}
      trigger="click"
      interactive
      placement="bottom-start"
      delay={0}
      duration={0}
      content={
        <Content>
          <Viewport>
            <Group label="Turn into">
              {data.map((group, index) => (
                <Fragment key={`toolbar-group-${index}-select`}>
                  {index !== 0 ? <Divider my="0.25rem" /> : null}
                  {group.map(({ label, icon, action, active }, idx) => (
                    <Item
                      key={`toolbar-group-${index}-select-${idx}-item`}
                      icon={icon}
                      onClick={() => action(editor)}
                      isActive={active(editor)}
                    >
                      {label}
                    </Item>
                  ))}
                </Fragment>
              ))}
            </Group>
          </Viewport>
        </Content>
      }
    >
      <Stack
        align="center"
        direction="row"
        cursor="pointer"
        px="0.5rem"
        spacing="8px"
        color={selectedIcon}
        _hover={{ bgColor: selectedBg }}
        _focus={{ bgColor: selectedBg }}
        tabIndex={-1}
      >
        <Text
          letterSpacing="0.01rem"
          color={selectedText}
          fontSize="12px"
          fontWeight="medium"
          as="span"
        >
          {text(editor) || placeholder}
        </Text>
        <CaretDown size={12} weight="bold" />
      </Stack>
    </Tippy>
  );
};

export default Component;
