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
      document.body.style.backgroundColor = "black"; 

      const footer = document.querySelector("footer"); 
      if (footer) footer.style.backgroundColor = "lightgreen"; 
      footer.style.color = "#333333";
      const favoriteCurrencyPairs = document.getElementById("favorite"); 
      if (favoriteCurrencyPairs) {
        favoriteCurrencyPairs.style.backgroundColor = "lightgreen"; 
      }

      const nav = document.querySelector("nav");
      if (nav) nav.style.backgroundColor = "lightgreen"; 
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = "white"; 

      const footer = document.querySelector("footer"); 
      if (footer) footer.style.backgroundColor = "";

      const favoriteCurrencyPairs = document.getElementById("favorite"); 
      if (favoriteCurrencyPairs) {
        favoriteCurrencyPairs.style.backgroundColor = ""; 
      }

      const nav = document.querySelector("nav");
      if (nav) nav.style.backgroundColor = "";
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 text-5xl duration-300"
      style={{
        color: darkMode ? "black" : "black" 
      }}
    >
      {darkMode ? <HiMoon /> : <HiOutlineMoon />}
    </button>
  );
};

export default Darkmode_button;
