import React, { useState } from "react";
import { Square } from "./Square";

import "../styles/board.css";
import { calculateWinner } from "../calculateWinner";

export const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setisXnext] = useState(true);
  const winner = calculateWinner(board);

  const clickHandler = () => {
    console.log(123);
  };

  return (
    <div className="board">
      <Square clickHandler={clickHandler} />
      <Square clickHandler={clickHandler} />
      <Square clickHandler={clickHandler} />
      <Square clickHandler={clickHandler} />
      <Square clickHandler={clickHandler} />
      <Square clickHandler={clickHandler} />
      <Square clickHandler={clickHandler} />
      <Square clickHandler={clickHandler} />
      <Square clickHandler={clickHandler} />
    </div>
  );
};
