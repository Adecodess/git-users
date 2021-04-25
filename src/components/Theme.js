import React, { useEffect } from "react";
import { GithubContext } from "../context/context";

const Theme = () => {
  const { theme, setTheme } = React.useContext(GithubContext);
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <main>
        <nav>
          <button className="theme-btn" onClick={toggleTheme}>
            toggle
          </button>
        </nav>
      </main>
    </>
  );
};

export default Theme;
