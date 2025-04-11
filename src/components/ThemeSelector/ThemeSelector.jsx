// import { useTheme } from "./ThemeContext";

import { useEffect, useState } from "react";
import { useTheme } from "../ThemeProvider";
import "./theme-selector.css";

export default function ThemeSelector() {
  //   let currentTheme;
  const { changeTheme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  useEffect(() => {
    changeTheme(currentTheme);
  }, [currentTheme]);

  return (
    <div className="theme-selector">
      <ul className="picker-list">
        <li
          className={`picker-item ${
            currentTheme === "palottis_drone" ? "current-theme" : ""
          }`}
          id="palottis_drone"
          onClick={() => setCurrentTheme("palottis_drone")}
        ></li>
        <li
          className={`picker-item ${
            currentTheme === "schweiz1" ? "current-theme" : ""
          }`}
          id="schweiz1"
          onClick={() => setCurrentTheme("dark")}
        ></li>
        <li
          className={`picker-item ${
            currentTheme === "blue" ? "current-theme" : ""
          }`}
          id="blue"
          onClick={() => setCurrentTheme("blue")}
        ></li>
        <li
          className={`picker-item ${
            currentTheme === "palottis_drone" ? "current-theme" : ""
          }`}
          id="palottis_drone"
          onClick={() => setCurrentTheme("palottis_drone")}
        ></li>
        <li
          className={`picker-item ${
            currentTheme === "palottis_drone" ? "current-theme" : ""
          }`}
          id="palottis_drone"
          onClick={() => setCurrentTheme("palottis_drone")}
        ></li>
      </ul>

      {/* <div
        className="theme-option"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
        onClick={() => setCurrentTheme("white-theme")}
      >
        Белая тема
      </div>
      <div
        className="theme-option"
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
        onClick={() => changeTheme("black-theme")}
      >
        Черная тема
      </div>
      <div
        className="theme-option"
        style={{ backgroundColor: "#1e90ff", color: "#ffffff" }}
        onClick={() => changeTheme("blue-theme")}
      >
        Синяя тема
      </div> */}
    </div>
  );
}
