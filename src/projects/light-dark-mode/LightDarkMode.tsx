import { useLocalStorage } from "./useLocalStorage";
import "./theme.css";

export const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <p>Hello World!</p>
      <button onClick={handleToggleTheme}>Change Theme</button>
    </div>
  );
};
