import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange() {
    event?.preventDefault();
    console.log("clicado");
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", theme);
      return nextTheme;
    });

  }
  

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>

      <a
        className={styles.menuLink}
        href="#"  
        title="Ir para home"
        aria-label="Ir para home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        title="Ver histórico"
        aria-label="Ver histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        title="Configurações"
        aria-label="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        title="Mudar tema"
        aria-label="Mudar tema"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
