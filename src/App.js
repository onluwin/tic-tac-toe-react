import { Toaster } from "react-hot-toast";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./pages/MainLayout";

import { useEffect, useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { themen } from "./components/ThemeSelector/themen";
import { changeStyles } from "./Utils/changeStyles";
// import { SelectGameMode } from "./components/SelectGameMode";
// import { Online } from "./pages/Online";
// import { GameRoom } from "./pages/GameRoom";
function App() {
  const [currentTheme, setCurrentTheme] = useState(() => getDefaultTheme());

  function getDefaultTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    return null;
  }

  // useEffect(() => {
  //   if (theme) {
  //   }
  // }, [theme]);

  useEffect(() => {
    const appRef = document.querySelector(".app-wrapper");
    if (!appRef) return;

    appRef.style.backgroundImage = `url(${themen[currentTheme]})`;
    changeStyles(currentTheme);
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        {/* <header className="App-header">g</header>
         */}
        <div className="app-wrapper">
          <BrowserRouter basename="/tic-tac-toe-react">
            <Routes>
              <Route path="/" element={<MainLayout />}></Route>
            </Routes>
          </BrowserRouter>
        </div>

        {/* <header className="App-header">
        <Game />
      </header> */}
        <Toaster
          position="top-left"
          toastOptions={{
            style: {
              background: "black",
              color: "white",
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
