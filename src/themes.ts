interface Theme {
    name: string;
    background: string;
    foreground: string;
    accent: string;
    muted: string;
    border: string;
    isDark: boolean;
}

export const THEMES: Theme[] = [
    {
        name: "Lobster",
        background: "#f6eee1",
        foreground: "#012c56",
        accent: "#e14a39",
        muted: "#efd8b0",
        border: "#dc9891",
        isDark: false,
    },
    {
        name: "Leaf Blue",
        background: "#f2f5ec",
        foreground: "#353538",
        accent: "#1158d1",
        muted: "#bbc789",
        border: "#7cadff",
        isDark: false,
    },
    {
        name: "Pinky Light",
        background: "#fafcfc",
        foreground: "#222e36",
        accent: "#d3006a",
        muted: "#f1bad4",
        border: "#e3a9c6",
        isDark: false,
    },
    {
        name: "AstroPaper 1",
        background: "#2f3741",
        foreground: "#e6e6e6",
        accent: "#1ad9d9",
        muted: "#596b81",
        border: "#3b4655",
        isDark: true,
    },
    {
        name: "Deep Oyster",
        background: "#21233d",
        foreground: "#f4f7f5",
        accent: "#ff5256",
        muted: "#4a4e86",
        border: "#b12f32",
        isDark: true,
    },
    {
        name: "Pikky Dark",
        background: "#353640",
        foreground: "#e9edf1",
        accent: "#ff78c8",
        muted: "#715566",
        border: "#86436b",
        isDark: true,
    },
    {
        name: "Astro Dark",
        background: "#212737",
        foreground: "#eaedf3",
        accent: "#ff6b01",
        muted: "#8a3302",
        border: "#ab4b08",
        isDark: true,
    },
    {
        name: "Astro Deep Purple",
        background: "#212737",
        foreground: "#eaedf3",
        accent: "#eb3fd3",
        muted: "#7d4f7c",
        border: "#642451",
        isDark: true,
    },
    {
        name: "AstroPaper v4",
        background: "#000123",
        foreground: "#eaedf3",
        accent: "#617bff",
        muted: "#0c0e4f",
        border: "#303f8a",
        isDark: true,
    },
] as const;

