import BulletList from "@tiptap/extension-bullet-list";

export default BulletList.configure({
  HTMLAttributes: { class: "mebook mb-list bullet", role: "presentation" }
});
