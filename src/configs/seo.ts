import type { DefaultSeoProps } from "next-seo/lib/types";

export default {
  title: "mebook",
  defaultTitle: "mebook",
  description:
    "An editor, a companion, a friend. In mebook, you write and share your notes for all. Write a script, novel, story, essay or poem. Write dreams, it's easy",
  themeColor: "#161618",
  additionalMetaTags: [
    { property: "author", content: "meluiz.com" },
    { property: "apple-mobile-web-app-capable", content: "yes" },
    {
      property: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent"
    }
  ],
  additionalLinkTags: [{ rel: "icon", href: "/favicon.png" }],
  openGraph: {
    type: "website",
    title: "mebook",
    siteName: "mebook",
    locale: "pt_BR",
    url: "https://mebook.meluiz.com",
    images: [
      {
        url: "https://mebook.meluiz.com/opengraph.png",
        width: 1920,
        height: 960,
        alt: "Opengraph Image"
      }
    ]
  }
} as DefaultSeoProps;
