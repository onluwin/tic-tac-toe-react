import toast from "react-hot-toast";
import { calculateWinner } from "./calculateWinner";
import { defineWinType } from "./defineWinType";

export const playerMove = (
  index,
  board,
  winner,
  isDraw,
  isXnext,
  setIsDraw,
  isGameActive,
  setIsGameActive,
  setBoard
) => {
  console.log("index", index);
  const boardCopy = [...board];

  if (board[index] === null && !isDraw && !winner) {
    const statement = isXnext ? "X" : "O";
    console.log("statement", statement);
    boardCopy[index] = statement;
    setBoard(boardCopy);
  }
};
