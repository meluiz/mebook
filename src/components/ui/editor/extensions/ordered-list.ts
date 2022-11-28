import OrderedList from "@tiptap/extension-ordered-list";

export default OrderedList.configure({
  HTMLAttributes: {
    class: "mebook mb-list ordered",
    role: "presentation"
  }
});
