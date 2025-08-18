import type { DefaultTheme } from "vitepress";

export const themeConfig: DefaultTheme.Config = {
    search: {
        provider: "algolia",
        options: {
            appId: "G1VZEUTCE0",
            apiKey: "26878e83a080aedc4107d920ae9330fc",
            indexName: "BNBU Handbook",
            placeholder: "Please Enter Keywords",
            translations: {
                button: {
                    buttonText: "Please Enter Keywords",
                },
            },
        },
    },
};

