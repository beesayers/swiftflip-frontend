import { Switch } from "@headlessui/react";
import React from "react";

export interface IThemeToggle {
  darkMode: boolean;
  toggleDarkMode: () => void;
  textClasses: string;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const ThemeToggle: React.FC<IThemeToggle> = ({ darkMode, toggleDarkMode, textClasses }) => {
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        className={classNames(
          darkMode ? "button-bg-active-theme" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            darkMode ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3 text-sm">
        <span className={`button-text-active-theme ${textClasses}`}>{darkMode ? "Dark Mode" : "Light Mode"}</span>{" "}
      </Switch.Label>
    </Switch.Group>
  );
};

export default ThemeToggle;
