import React from "react";
import { Square } from "./Square";

import "../styles/board.css";

export const Board = ({
  squares,
  onClick,
  winner,
  isDraw,
  isXnext,
  setIsBotEnabled,
  isBotEnabled,
}) => {
  // console.log("winner", winner);
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

        <button
          type="button"
          className="enableBotBtn"
          onClick={() => setIsBotEnabled(!isBotEnabled)}
        >
          BOT: {isBotEnabled ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
};
