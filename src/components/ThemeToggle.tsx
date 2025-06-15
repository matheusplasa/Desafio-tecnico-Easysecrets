import React from "react";

type Theme = "light" | "dark";

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  toggleTheme,
}) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? <p>🌞</p> : <p>🌙</p>}
    </button>
  );
};
