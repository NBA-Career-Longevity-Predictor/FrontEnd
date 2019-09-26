import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage"

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("key");
  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};