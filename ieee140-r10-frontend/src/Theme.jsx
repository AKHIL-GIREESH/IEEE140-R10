import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.backgroundColor = "#EDEDED";
      document.documentElement.style.color = "#000000";
    } else {
      document.documentElement.style.backgroundColor = "#1E1E1E";
      document.documentElement.style.color = "rgba(255, 255, 255, 0.87)";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
