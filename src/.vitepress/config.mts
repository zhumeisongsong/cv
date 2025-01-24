import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zhumei Song‘s CV",
  description: "Software engineer based in Tokyo. 🇯🇵",
  base: "/cv/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "CV", link: "" },
      { text: "CV-Ja", link: "ja" },
      {
        text: "CV PDF",
        items: [
          { text: "En", link: "zhumeisong-en.cv.pdf" },
          { text: "Ja", link: "zhumeisong-ja.cv.pdf" },
        ],
      },
      // { text: "Projects", link: "/projects/202112" },
      { text: "Blog", link: "https://zhumeisongsong.github.io/blog" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/zhumeisongsong/cv" },
    ],

    sidebar: {
      "/projects/": [
        // {
        //   text: "Workflow Web App",
        //   link: "/projects/202208",
        // },
        {
          text: "Admin Web App",
          link: "/projects/202112",
        },
        // {
        //   text: "Coffee Label Generated Web App",
        //   link: "/projects/202106",
        // },
      ],
    },
  },
  lastUpdated: true,
  head: [
    [
      "meta",
      {
        name: "google-adsense-account",
        content: "ca-pub-1141212403322647",
      },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "71A3myPAsbW4yU-SCkZlmMSVmyagcPQGxCxU2IfHhx4",
      },
    ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-L74CKN4BBD",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-L74CKN4BBD');",
    ],
  ],
});
