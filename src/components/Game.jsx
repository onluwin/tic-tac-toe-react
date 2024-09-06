import "../styles/game.css";
import { Board } from "./Board";

export const Game = () => {
  return (
    <div className="wrapper">
      <button type="button" className="restartBtn">
        Noch einmal spielen
      </button>
      <Board />
    </div>
  );
};
