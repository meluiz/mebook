import Heading from "@tiptap/extension-heading";

export default Heading.configure({
  HTMLAttributes: { class: "mebook mb-heading", role: "presentation" },
  levels: [1, 2, 3]
});
