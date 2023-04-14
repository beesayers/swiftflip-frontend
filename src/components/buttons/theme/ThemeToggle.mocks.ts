// Use this for mocking examples of this component

import { IThemeToggle } from "./ThemeToggle";

const base: IThemeToggle = {
  darkMode: true,
  toggleDarkMode: () => {},
  textClasses: "text-white",
};

export const mockThemeToggleProps = {
  base,
};
