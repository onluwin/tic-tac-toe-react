import React from "react";
import { Square } from "./Square";

import "../styles/board.css";

export const Board = ({ squares, onClick, winner, isDraw, isXnext }) => {
  return (
    <div className="board">
      {squares.map((square, i) => {
        return <Square clickHandler={onClick} value={square} key={i} id={i} />;
      })}
      {!isDraw && !winner && <p>Jetzt dran: {isXnext ? "X" : "O"}</p>}
      {winner && <p>Gewonnen: {winner}</p>}
      {isDraw && <p>Unentschieden</p>}
    </div>
  );
};
