import "./styles.css";
import Child from "./Child";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((d) => !d);
  };

  useEffect(() => {
    document.body.style.background = isDarkMode ? "#333" : "white";
    document.body.style.color = isDarkMode ? "white" : "#333";
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Child />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident id
        aliquem ae{" "}
      </p>
    </ThemeContext.Provider>
  );
}

export default App;
