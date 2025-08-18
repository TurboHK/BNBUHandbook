import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import getNavs  from "../navs/zh-yue";
import {sidebar} from '../sidebars/zh-yue'

export const yueConfig: LocaleSpecificConfig<DefaultTheme.Config> = {

    themeConfig: {
        lastUpdatedText: '上次更新',
        returnToTopLabel: '返回頂部',

        docFooter: {
            prev: '上一頁',
            next: '下一頁'
        },

        editLink: {
            pattern: 'https://github.com/PhoenixTechProject/BNBUHandbook/edit/main/docs/:path',
            text: '參與編輯',
        },

        logo: "/book.svg",

        nav: getNavs(),

        sidebar,

        outline: {
            level: "deep",
            label: "目錄",
        },

        socialLinks: [
            { 
                icon: 'github', 
                link: 'https://github.com/PhoenixTechProject/BNBUHandbook' 
            }
        ]
    },
}