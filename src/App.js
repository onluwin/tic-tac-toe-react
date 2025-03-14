import { Toaster } from "react-hot-toast";

import "./App.css";
import { Game } from "./components/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./pages/MainLayout";
import { Online } from "./pages/Online";
import { GameRoom } from "./pages/GameRoom";
import { SelectGameMode } from "./components/SelectGameMode";
// import { SelectGameMode } from "./components/SelectGameMode";
// import { Online } from "./pages/Online";
// import { GameRoom } from "./pages/GameRoom";
function App() {
  return (
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
  );
}

export default App;
