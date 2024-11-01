import { Toaster } from "react-hot-toast";

import "./App.css";
import { Game } from "./components/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./pages/MainLayout";
import { SelectGameMode } from "./components/SelectGameMode";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">g</header>
       */}
      <div className="app-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/online" element={<div>online </div>} />
              <Route
                path="/offline"
                element={
                  <>
                    <Game />
                    <SelectGameMode />
                  </>
                }
              />
            </Route>
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
