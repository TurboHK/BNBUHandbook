import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import getNavs  from "../navs/en";
import {sidebar} from '../sidebars/en'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        lastUpdatedText: 'Last Updated',
        returnToTopLabel: 'Back to Top',

        docFooter: {
            prev: 'Previous',
            next: 'Next'
        },

        editLink: {
            pattern: 'https://github.com/PhoenixTechProject/BNBUHandbook/edit/main/docs/:path',
            text: 'Edit this page',
        },

        logo: "/book.svg",

        nav: getNavs(),

        sidebar,

        outline: {
            level: "deep",
            label: "Contents",
        },

        footer: {
            message: "Released under the MIT License",
            copyright: "Copyright © 2025-present PhoenixTech Project ",
        },

        socialLinks: [
            { 
                icon: 'github', 
                link: 'https://github.com/PhoenixTechProject/BNBUHandbook' 
            }
        ],

    },
}   