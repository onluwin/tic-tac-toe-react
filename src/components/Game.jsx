import { useEffect, useState } from "react";
import "../styles/game.css";
import { Board } from "./Board";
import toast from "react-hot-toast";
import { calculateWinner } from "../Utils/calculateWinner";
import { startNewGame } from "../Utils/startNewGame";
import { checkDiagonalWin } from "../Utils/checkDiagonalWin";
import { checkVerticalWin } from "../Utils/checkVerticalWin";
import { botMove, timerId } from "../Utils/botMove";

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setisXnext] = useState(true);
  const [result, setResult] = useState({ winner: "", winningLine: [] });
  const [isDraw, setIsDraw] = useState(false);
  const [isBotEnabled, setIsBotEnabled] = useState(true);

  // CALCULATE WINNER

  useEffect(() => {
    const res = calculateWinner(board, setIsDraw);
    // console.log("res", res);
    try {
      setResult(res);
    } catch (error) {
      console.warn(error);
    }
  }, [board]);

  // WIN LOGIC

  useEffect(() => {
    if (!result.winner || !result.winningLine) {
      return;
    }
    // console.log("result.winningLine", result.winningLine);

    let isDiagonalWin = checkDiagonalWin(result.winningLine);
    const isVerticalWin = checkVerticalWin(result.winningLine);

    // console.log("isDiagonalWin", isDiagonalWin);

    const squaresRefs = document.querySelectorAll(".square");

    if (isDiagonalWin.result) {
      result.winningLine.forEach((winningIndex) => {
        const winningSquaresRef = squaresRefs[winningIndex];

        return isDiagonalWin.direction === "right"
          ? winningSquaresRef.classList.add("winner", "diagonal-right")
          : winningSquaresRef.classList.add("winner", "diagonal-left");
      });
    } else if (isVerticalWin) {
      result.winningLine.forEach((winningIndex) => {
        squaresRefs[winningIndex].classList.add("winner", "vertical");
      });
    } else {
      result.winningLine.forEach((winningIndex) => {
        squaresRefs[winningIndex].classList.add("winner");
      });
    }

    toast.success(`${result.winner} hat gewonnen`, {
      duration: 1500,
    });
  }, [result.winner, result.winningLine]);

  // DRAW LOGIC

  useEffect(() => {
    if (!isDraw) {
      return;
    }
    toast.error(`Unentschieden`, {
      duration: 1500,
    });
  }, [isDraw]);

  // BOT LOGIC

  useEffect(() => {
    let isGameOver = isDraw || Boolean(result.winner);
    // console.log("isGameOver", isGameOver);
    if (isGameOver) {
      clearTimeout(timerId);
      return;
    }
    // console.log("BOT MOVES");
    const btnRefs = document.querySelectorAll(".square");
    if (isBotEnabled && !isXnext && !result.winner) {
      botMove(board, setBoard, setisXnext);

      btnRefs.forEach((btn) => (btn.style.pointerEvents = "none"));
    }
    return () => {
      btnRefs.forEach((btn) => (btn.style.pointerEvents = "auto"));
    };
  }, [board, isBotEnabled, isDraw, isXnext, result.winner]);

  // CHANGING GAME MODE ABILITY

  useEffect(() => {
    // console.log("board", board);
    const isGameStarted = board.some((element) => element !== null);
    // console.log("isGameStarted", isGameStarted);
    const enableBotBtnRef = document.querySelector(".enableBotBtn");
    if (isGameStarted) {
      enableBotBtnRef.classList.add("not-active");
    } else {
      enableBotBtnRef.classList.remove("not-active");
    }
  }, [board]);

  const clickHandler = (index) => {
    const boardCopy = [...board];
    if (result.winner || isDraw) {
      return toast.error("Das Spiel ist beendet", {
        duration: 1500,
      });
    }
    if (result.winner || boardCopy[index]) {
      toast("Sie haben es schon benutzt", {
        duration: 1500,
      });
      // console.log("boardCopy", boardCopy);
      return null;
    } else {
      const button = document.getElementById(index);
      button.textContent = isXnext ? "X" : "O";
      setisXnext(!isXnext);
      boardCopy[index] = isXnext ? "X" : "O";
      setBoard(boardCopy);
      // setIsBotMoving(true);
    }
  };

  return (
    <div className="wrapper">
      <button
        type="button"
        className="restartBtn"
        onClick={() => {
          startNewGame(setBoard, setisXnext, setIsDraw, setResult);
        }}
      >
        Noch einmal spielen
      </button>
      <Board
        squares={board}
        onClick={clickHandler}
        winner={result.winner}
        isDraw={isDraw}
        isXnext={isXnext}
        isBotEnabled={isBotEnabled}
        setIsBotEnabled={setIsBotEnabled}
      />
    </div>
  );
};
