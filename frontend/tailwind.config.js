import { nextui } from "@nextui-org/react";

export const content = [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        container: {
            center: true,
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
        },
    },
};
export const darkMode = "class";
export const plugins = [
    nextui({
        themes: {
            light: {
                colors: {
                    background: "#FFFFFF",
                    foreground: "#11181C",
                },
            },
        },
    }),
];
