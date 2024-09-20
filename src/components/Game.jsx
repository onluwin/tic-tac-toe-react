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
    const res = calculateWinner(board, setIsDraw);
    console.log("res", res);
    try {
      setWinner(res.winner);
    } catch (error) {
      console.warn(error);
    }
  }, [board]);

  useEffect(() => {
    if (!winner) {
      return;
    }
    // console.log("winner", winner);
    toast.success(`${winner} hat gewonnen`, {
      duration: 1500,
    });
  }, [winner]);

  useEffect(() => {
    if (!isDraw) {
      return;
    }
    toast.error(`Unentschieden`, {
      duration: 1500,
    });
  }, [isDraw]);

  const clickHandler = (index) => {
    const boardCopy = [...board];
    if (winner || isDraw) {
      return toast.error("Das Spiel ist beendet", {
        duration: 1500,
      });
    }
    if (winner || boardCopy[index]) {
      toast("Sie haben es schon benutzt", {
        duration: 1500,
      });
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
        onClick={() => {
          startNewGame(setBoard, setisXnext, setIsDraw, setWinner);
        }}
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
