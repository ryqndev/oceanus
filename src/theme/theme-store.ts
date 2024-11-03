import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Theme, ThemeStore } from "./types";
import { getCurrentTheme, setCurrentTheme } from "./theme";

export const THEMES: Theme[] = [Theme.LIGHT, Theme.DARK];

/**
 * Hook for accessing the current selected theme
 */
export const useThemeStore = create<ThemeStore>()(
    persist(
        (set) => ({
            theme: getCurrentTheme(),
            setTheme: (theme: Theme) =>
                set(() => {
                    setCurrentTheme(theme);
                    return { theme };
                }),
            toggleTheme: () =>
                set(({ theme }) => {
                    const nextTheme =
                        THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
                    setCurrentTheme(nextTheme);

                    return {
                        theme: nextTheme,
                    };
                }),
        }),
        { name: "@ryqndev/theme" }
    )
);
