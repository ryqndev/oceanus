import { Theme } from "./types";

/**
 * theme info is stored in localStorage and will
 * default to the color-preference scheme value.
 *
 * Defaults to dark mode at base level
 */
export const getCurrentTheme = (): Theme => {
    const storedValue = localStorage.getItem("@ryqndev/oceanus/theme") as Theme;

    return storedValue ?? Theme.DARK;
};

export const setCurrentTheme = (theme: Theme) => {
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("@ryqndev/theme", theme);
};
