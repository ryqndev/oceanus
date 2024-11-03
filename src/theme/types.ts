export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export type ThemeStore = {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
};
