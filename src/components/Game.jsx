import { useEffect, useState } from "react";
import "../styles/game.css";
import { Board } from "./Board";
import toast from "react-hot-toast";
import { calculateWinner } from "../Utils/calculateWinner";
import { startNewGame } from "../Utils/startNewGame";

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setisXnext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  useEffect(() => {
    setWinner(calculateWinner(board, setIsDraw));
    return () => {};
  }, [board]);

  const clickHandler = (index) => {
    const boardCopy = [...board];
    if (winner || isDraw) {
      toast.error("Game is over");
    }
    if (winner || boardCopy[index]) {
      // toast.error("Game is over");
      toast("Sie haben es schon benutzt");
      console.log("boardCopy", boardCopy);
      return null;
    } else {
      const button = document.getElementById(index);
      button.textContent = isXnext ? "X" : "O";
      setisXnext(!isXnext);
      boardCopy[index] = isXnext ? "X" : "O";
      setBoard(boardCopy);
    }
  };

  return (
    <div className="wrapper">
      <button
        type="button"
        className="restartBtn"
        onClick={() => startNewGame(setBoard, setisXnext, setIsDraw, setWinner)}
      >
        Noch einmal spielen
      </button>
      <Board
        squares={board}
        onClick={clickHandler}
        winner={winner}
        isDraw={isDraw}
        isXnext={isXnext}
      />
    </div>
  );
};
