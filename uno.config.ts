import { extractorArbitraryVariants } from "@unocss/extractor-arbitrary-variants";
import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
import { presetExtra } from "unocss-preset-extra";
import { presetUseful } from "unocss-preset-useful";

export default defineConfig({
    presets: [
        presetUno(),
        presetExtra(),
        presetUseful(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
    extractors: [
        extractorArbitraryVariants,
    ],
});
