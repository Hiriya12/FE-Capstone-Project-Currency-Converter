import React, { useState, useEffect } from 'react';
import { HiOutlineMoon, HiMoon } from 'react-icons/hi';

const Darkmode_button = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = "darkgreen"; // Change body background to dark green
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = ""; // Reset background color
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 text-5xl duration-300"
      style={{
        background: darkMode ? "darkgreen" : "transparent", // Change button background in dark mode
        color: darkMode ? "lightgray" : "black" // Change icon color in dark mode
      }}
    >
      {darkMode ? <HiMoon /> : <HiOutlineMoon />}
    </button>
  );
};

export default Darkmode_button;