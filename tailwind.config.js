import { addDynamicIconSelectors } from "@iconify/tailwind";
import plugin from "tailwindcss/plugin";

/** @type {import("tailwindcss").Config} */
export default
{
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme:
    {
        extend: {},
        fontFamily:
        {
            "sans": ["'Josefin Sans'", "sans-serif"],
            "display": ["'Bebas Neue'", "monospace"]
        }
    },
    plugins:
    [
        // Iconify plugin
        addDynamicIconSelectors({
            iconSets: {
                builtin: "builtin_icons.json",
            },
        }),
        // https://github.com/tailwindlabs/tailwindcss/discussions/6845#discussioncomment-5980803
        plugin(({ addUtilities }) => {
            addUtilities({
            // https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
            ".horizontal-writing-tb": { "writing-mode": "horizontal-tb" },
            ".vertical-writing-rl": { "writing-mode": "vertical-rl" },
            ".vertical-writing-lr": { "writing-mode": "vertical-lr" },
            ".vertical-writing-sideways-lr": { "writing-mode": "sideways-lr" },
            // https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
            ".orientation-mixed": { "text-orientation": "mixed" },
            ".orientation-upright": { "text-orientation": "upright" },
            ".orientation-sideways-right": { "text-orientation": "sideways-right" },
            ".orientation-sideways": { "text-orientation": "sideways" },
            ".orientation-glyph": { "text-orientation": "use-glyph-orientation" },
            });
        })
    ],
}