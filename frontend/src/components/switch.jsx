import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import useStore from "../store";

const ThemeSwitch = () => {
  // Destructure theme and setTheme from useStore
  const { theme, setTheme } = useStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme
  }));

  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="outline-none">
      {isDarkMode ? (
        <LuSunMoon size={26} className="text-gray-500" />
      ) : (
        <IoMoonOutline size={26} className="" />
      )}
    </button>
  );
};

export default ThemeSwitch;
