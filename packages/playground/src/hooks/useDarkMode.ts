import { useEffect, useState } from "react";

type DarkMode = "dark" | "light";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<DarkMode>("light");
  useEffect(() => {
    const darkModeFromLocalStorage = localStorage.getItem("mode");
    if (
      darkModeFromLocalStorage === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  }, []);

  const toggle = () => {
    let after: DarkMode = "light";
    if (darkMode === "light") {
      after = "dark";
    }
    localStorage.setItem("mode", after);
    setDarkMode(after);
  };

  return { darkMode, toggle };
};
