import {defineConfig} from 'vitepress'
import {useCode} from "./md/Code";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Vuelize",
    description: "Realize the Impossible",
    themeConfig: {
        logo: "/logo.svg",
        sidebar: [
            {
                text: "Introduction",
                collapsed: false,
                items: [
                    {
                        text: "What is it?",
                        link: "/docs/introduction/what"
                    },
                    {
                        text: "Getting Started",
                        link: "/docs/introduction/getting-started"
                    },
                ]
            },
            {
                text: "Components",
                collapsed: false,
                items: [
                    {
                        text: "What is it?",
                        link: "/docs/components/what"
                    },
                    {
                        text: "Getting Started",
                        link: "/docs/components/getting-started"
                    },
                ]
            }

        ]
    },
    cleanUrls: true,
    base: "/",
    vite: {
        optimizeDeps: {
            include: ['vuelize'],
        },
        resolve: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.css'],
        },

        ssr: {
            noExternal: [
                "vuelize",
                "@morev/vue-transitions",
                "lodash"
            ]
        }
    },
    markdown: {
        anchor: {},
        config: (md) => {
            useCode(md);
        }
    }
})
