// import { useTheme } from "./ThemeContext";

import { useEffect, useState } from "react";
import { useTheme } from "../ThemeProvider";
import "./theme-selector.css";
import { themen } from "./themen";
import { changeStyles } from "../../Utils/changeStyles";

export default function ThemeSelector() {
  //   let currentTheme;
  const { changeTheme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  useEffect(() => {
    changeTheme(currentTheme);
    const appRef = document.querySelector(".app-wrapper");
    if (!appRef) return;

    appRef.style.backgroundImage = `url(${themen[currentTheme]})`;
    changeStyles(currentTheme);
  }, [currentTheme]);

  return (
    <div className="theme-selector">
      <ul className="picker-list">
        <li
          className={`picker-item ${
            currentTheme === "palottis1" ? "current-theme" : ""
          }`}
          onClick={() => setCurrentTheme("palottis1")}
        ></li>
        <li
          className={`picker-item ${
            currentTheme === "schweiz1" ? "current-theme" : ""
          }`}
          onClick={() => setCurrentTheme("schweiz1")}
        ></li>
        <li
          className={`picker-item ${
            currentTheme === "matterhorn" ? "current-theme" : ""
          }`}
          onClick={() => setCurrentTheme("matterhorn")}
        ></li>
        <li
          className={`picker-item ${
            currentTheme === "schweiz2" ? "current-theme" : ""
          }`}
          onClick={() => setCurrentTheme("schweiz2")}
        ></li>
        <li
          className={`picker-item ${
            currentTheme === "pistenbully" ? "current-theme" : ""
          }`}
          onClick={() => setCurrentTheme("pistenbully")}
        ></li>
        <li
          className={`picker-item ${
            currentTheme === "black" ? "current-theme" : ""
          }`}
          onClick={() => setCurrentTheme("black")}
        ></li>
      </ul>
    </div>
  );
}
