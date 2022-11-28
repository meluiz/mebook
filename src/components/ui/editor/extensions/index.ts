import Document from "@tiptap/extension-document";
import StarterKit from "@tiptap/starter-kit";

import BulletList from "./bullet-list";
import Code from "./code";
import CodeBlockLowlight from "./code-block-lowlight";
import Focus from "./focus";
import Heading from "./heading";
import OrderedList from "./ordered-list";
import Paragraph from "./paragraph";
import Placeholder from "./placeholder";
import TextAlign from "./text-align";
import Underline from "./underline";

export default [
  StarterKit,
  BulletList,
  Code,
  CodeBlockLowlight,
  Document,
  Focus,
  Heading,
  OrderedList,
  Paragraph,
  Placeholder,
  TextAlign,
  Underline
];
