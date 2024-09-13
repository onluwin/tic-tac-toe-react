import { Toaster } from "react-hot-toast";

import "./App.css";
import { Game } from "./components/Game";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      </header>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
