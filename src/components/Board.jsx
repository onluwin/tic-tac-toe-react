import React from "react";
import { Square } from "./Square";

import "../styles/board.css";

// import { Square } from "./Square";

// import "../styles/board.css";

export const Board = ({
  squares,
  onClick,
  winner,
  isDraw,
  isXnext,
  setMode,
  mode,
  onlineMode,
}) => {
  return (
    <div className="board">
      <div className="x">
        {squares.map((square, i) => {
          return (
            <Square clickHandler={onClick} value={square} key={i} id={i} />
          );
        })}
      </div>
      <div className="infoArea">
        {!isDraw && !winner && (
          <p className="gameResult">Jetzt dran: {isXnext ? "X" : "O"}</p>
        )}

        {winner && <p className="gameResult">Gewonnen: {winner}</p>}
        {isDraw && <p className="gameResult">Unentschieden</p>}

        {!onlineMode && (
          <button
            type="button"
            className="enableBotBtn"
            onClick={() => setMode(mode === "bot" ? "single-player" : "bot")}
          >
            BOT: {mode === "bot" ? "AN" : "AUS"}
          </button>
        )}
      </div>
    </div>
  );
};
