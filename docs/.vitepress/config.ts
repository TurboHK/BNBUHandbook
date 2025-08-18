import { defineConfig } from "vitepress";
import { docsConfig } from "./src/docs";
import { head } from "./src/head";
import { enConfig } from './src/configs/en'
import { cnConfig } from './src/configs/zh-cn'
import { yueConfig } from './src/configs/zh-yue'
import { themeConfig } from "./src/theme";

export default defineConfig({

    base: "/BNBUHandbook/",

    ...docsConfig,
    head,
    themeConfig,
    ...enConfig,

    locales: {
      'en': {
        label: 'English',
        lang: 'en',
        link: '/en/',
        ...enConfig
      },
      'zh-cn': {
        label: '简体中文（大陆）',
        lang: 'zh-cn',
        link: '/zh-cn/',
        ...cnConfig
      },
      'zh-yue': {
        label: '粵語繁體（香港）',
        lang: 'zh-yue',
        link: '/zh-yue/',
        ...yueConfig
      },
    },
})
