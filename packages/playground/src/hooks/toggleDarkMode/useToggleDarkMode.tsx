import { useState } from "react";
import styles from "./toggleDarkMode.module.css";

type DarkMode = "dark" | "light";

export const useToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState<DarkMode>(() => {
    const isDarkMode = (value: unknown): value is DarkMode =>
      value === 'dark' || value === 'light'

    const darkModeFromLocalStorage = localStorage.getItem("darkMode")
    if (isDarkMode(darkModeFromLocalStorage)) {
      return darkModeFromLocalStorage
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
  });

  const toggle = () => {
    setDarkMode((old) => {
      const newDarkMode = old === 'light' ? 'dark' : "light";
      localStorage.setItem("darkMode", newDarkMode);
      return newDarkMode
    });
  };

  const renderToggleDarkMode = () => (
    <div onClick={toggle} className={`${styles.toggle} ${darkMode === 'dark' ? styles.toggleChecked : ''}`}>
      <div className={styles.toggleContainer}>
        <div className={styles.toggleDark}>
          <span>🌜</span>
        </div>
        <div className={styles.toggleLight}>
          <span>🌞</span>
        </div>
      </div>
      <div className={styles.toggleCircle}></div>
      <input
        className={styles.toggleInput}
        type="checkbox"
        aria-label="Toggle DarkMode"
      />
    </div>
  );

  return { renderToggleDarkMode };
};

