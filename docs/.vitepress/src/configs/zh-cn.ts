import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import getNavs  from "../navs/zh-cn";
import {sidebar} from '../sidebars/zh-cn'

export const cnConfig: LocaleSpecificConfig<DefaultTheme.Config> = {

    themeConfig: {
        lastUpdatedText: '上次更新',
        returnToTopLabel: '返回顶部',

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        editLink: {
            pattern: 'https://github.com/PhoenixTechProject/BNBUHandbook/edit/main/docs/:path',
            text: '参与编辑',
        },

        logo: "/book.svg",

        nav: getNavs(),

        sidebar,

        outline: {
            level: "deep",
            label: "目录",
        },

        socialLinks: [
            { 
                icon: 'github', 
                link: 'https://github.com/PhoenixTechProject/BNBUHandbook' 
            }
        ]
    },
}