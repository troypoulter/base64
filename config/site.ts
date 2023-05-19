export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Base64",
  url: "https://base64.troypoulter.com",
  description:
    "A secure and user-friendly website that instantly encodes and decodes Base64, ensuring your data stays private and never leaves your device.",
  ogImage: "https://base64.troypoulter.com/og.png",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Analytics",
      href: "/analytics",
    },
  ],
  links: {
    website: "https://www.troypoulter.com/",
    github: "https://github.com/troypoulter/base64",
  },
}
