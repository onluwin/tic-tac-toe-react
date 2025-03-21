import { Toaster } from "react-hot-toast";

import "./App.css";
import { Game } from "./components/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./pages/MainLayout";
import { Online } from "./pages/Online";
import { GameRoom } from "./pages/GameRoom";
import { SelectGameMode } from "./components/SelectGameMode";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
// import { SelectGameMode } from "./components/SelectGameMode";
// import { Online } from "./pages/Online";
// import { GameRoom } from "./pages/GameRoom";
function App() {
  // const [theme, setTheme] = useState(() => getDefaultTheme());

  // function getDefaultTheme() {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) return savedTheme;

  //   const res = window.matchMedia("(prefers-color-scheme: dark)").matches
  //     ? "dark"
  //     : "light";
  //   console.log("res", res);
  //   return res;
  // }

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

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
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
}

export default App;
