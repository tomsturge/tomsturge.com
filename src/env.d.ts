/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

// Theme types
export type ThemeName = "light" | "dark";

export interface ThemeConfig {
  "--colorThemeBackgroundMain": string;
  "--colorThemeBackgroundAccent": string;
  "--colorThemeTextMain": string;
  "--colorThemeBackgroundShaded": string;
}

export interface ThemeUtils {
  config: Record<ThemeName, ThemeConfig>;
  applyThemeVariables: (themeName: ThemeName) => void;
  getInitialTheme: () => ThemeName;
  initTheme: () => ThemeName;
  toggleTheme: () => ThemeName;
}

// Extend the global Window interface
declare global {
  interface Window {
    ThemeUtils: ThemeUtils;
  }
}

// Ensure this file is treated as a module
export {};
