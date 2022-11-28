import { ForwardRefExoticComponent, RefAttributes } from "react";

import { Editor } from "@tiptap/react";
import {
  Code,
  IconProps,
  Link,
  ListBullets,
  ListNumbers,
  TextAlignCenter,
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight,
  TextBolder,
  TextHOne,
  TextHThree,
  TextHTwo,
  TextItalic,
  TextStrikethrough,
  TextT,
  TextUnderline
} from "phosphor-react";

export interface ToolbarData {
  label: string;
  action: (editor: Editor) => boolean;
  active: (editor: Editor) => boolean;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export interface ToolbarSelect {
  type: "select";
  placeholder: string;
  items: ToolbarData[][];
}

export interface ToolbarButton {
  type: "button";
  items: ToolbarData[];
}

type Data = ToolbarSelect | ToolbarButton;

export default [
  {
    type: "select",
    placeholder: "Text",
    items: [
      [
        {
          label: "Heading 1",
          action: (editor: Editor) =>
            editor.chain().focus().toggleHeading({ level: 1 }).run(),
          active: (editor: Editor) => editor.isActive({ level: 1 }),
          icon: TextHOne
        },
        {
          label: "Heading 2",
          action: (editor: Editor) =>
            editor.chain().focus().toggleHeading({ level: 2 }).run(),
          active: (editor: Editor) => editor.isActive({ level: 2 }),
          icon: TextHTwo
        },
        {
          label: "Heading 3",
          action: (editor: Editor) =>
            editor.chain().focus().toggleHeading({ level: 3 }).run(),
          active: (editor: Editor) => editor.isActive({ level: 3 }),
          icon: TextHThree
        },
        {
          label: "Paragraph",
          action: (editor: Editor) =>
            editor.chain().focus().setParagraph().run(),
          active: (editor: Editor) => editor.isActive("paragraph"),
          icon: TextT
        }
      ],
      [
        {
          label: "Ordered List",
          action: (editor: Editor) =>
            editor.chain().focus().toggleOrderedList().run(),
          active: (editor: Editor) => editor.isActive("orderedList"),
          icon: ListNumbers
        },
        {
          label: "Unordered List",
          action: (editor: Editor) =>
            editor.chain().focus().toggleBulletList().run(),
          active: (editor: Editor) => editor.isActive("bulletList"),
          icon: ListBullets
        }
      ]
    ]
  },
  {
    type: "select",
    placeholder: "Code",
    items: [
      [
        {
          label: "Inline Code",
          action: (editor: Editor) => editor.chain().focus().toggleCode().run(),
          active: (editor: Editor) => editor.isActive("code"),
          icon: TextHThree
        },
        {
          label: "Block Code",
          action: (editor: Editor) =>
            editor.chain().focus().toggleCodeBlock().run(),
          active: (editor: Editor) => editor.isActive("codeBlock"),
          icon: TextT
        }
      ]
    ]
  },
  {
    type: "button",
    items: [
      {
        label: "Bold",
        action: (editor: Editor) => editor.chain().focus().toggleBold().run(),
        active: (editor: Editor) => editor.isActive("bold"),
        icon: TextBolder
      },
      {
        label: "Italic",
        action: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
        active: (editor: Editor) => editor.isActive("italic"),
        icon: TextItalic
      },
      {
        label: "Underline",
        action: (editor: Editor) =>
          editor.chain().focus().toggleUnderline().run(),
        active: (editor: Editor) => editor.isActive("underline"),
        icon: TextUnderline
      },
      {
        label: "Strike Through",
        action: (editor: Editor) => editor.chain().focus().toggleStrike().run(),
        active: (editor: Editor) => editor.isActive("strike"),
        icon: TextStrikethrough
      }
    ]
  },
  {
    type: "button",
    items: [
      {
        label: "Link",
        action: (editor: Editor) => editor.chain().focus().toggleBold().run(),
        active: (editor: Editor) => editor.isActive("none"),
        icon: Link
      },
      {
        label: "Code",
        action: (editor: Editor) => editor.chain().focus().toggleCode().run(),
        active: (editor: Editor) => editor.isActive("code"),
        icon: Code
      }
    ]
  },
  {
    type: "button",
    items: [
      {
        label: "Text Align Left",
        action: (editor: Editor) =>
          editor.chain().focus().setTextAlign("left").run(),
        active: (editor: Editor) => editor.isActive({ textAlign: "left" }),
        icon: TextAlignLeft
      },
      {
        label: "Text Align Center",
        action: (editor: Editor) =>
          editor.chain().focus().setTextAlign("center").run(),
        active: (editor: Editor) => editor.isActive({ textAlign: "center" }),
        icon: TextAlignCenter
      },
      {
        label: "Text Align Right",
        action: (editor: Editor) =>
          editor.chain().focus().setTextAlign("right").run(),
        active: (editor: Editor) => editor.isActive({ textAlign: "right" }),
        icon: TextAlignRight
      },
      {
        label: "Text Jusitfy",
        action: (editor: Editor) =>
          editor.chain().focus().setTextAlign("justify").run(),
        active: (editor: Editor) => editor.isActive({ textAlign: "justify" }),
        icon: TextAlignJustify
      }
    ]
  }
] as Data[];
