// import { useTheme } from "./ThemeContext";

import { useEffect } from "react";
import { useTheme } from "../ThemeProvider";
import "./theme-selector.css";

export default function ThemeSelector() {
  //   let currentTheme;
  const { changeTheme } = useTheme();
  let currentTheme = localStorage.getItem("theme");

  return (
    <div className="theme-selector">
      <ul className="picker-list">
        <li
          className={`picker-item ${
            currentTheme === "light" ? "current-theme" : ""
          }`}
          id="light"
          onClick={() => changeTheme("light")}
        >
          Белая тема
        </li>
        <li
          className={`picker-item ${
            currentTheme === "dark" ? "current-theme" : ""
          }`}
          id="dark"
          onClick={() => changeTheme("dark")}
        >
          Черная тема
        </li>
        <li
          className={`picker-item ${
            currentTheme === "blue" ? "current-theme" : ""
          }`}
          id="blue"
          onClick={() => changeTheme("blue")}
        >
          Синяя тема
        </li>
      </ul>

      {/* <div
        className="theme-option"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
        onClick={() => changeTheme("white-theme")}
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
