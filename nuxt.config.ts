// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        "~/assets/css/main.scss",
    ],
    modules: [
        "@unocss/nuxt",
    ],
    typescript: {
        typeCheck: true,
        tsConfig: {
            compilerOptions: {
                noErrorTruncation: true,
                jsx: "preserve",
                jsxImportSource: "vue",
                verbatimModuleSyntax: true,
            },
        },
    },
});
