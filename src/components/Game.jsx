import { useEffect, useState } from "react";
import "../styles/game.css";
import { Board } from "./Board";
import toast from "react-hot-toast";
import { calculateWinner } from "../Utils/calculateWinner";
import { startNewGame } from "../Utils/startNewGame";
import { botMove, timerId } from "../Utils/bot/botMove";
import { playerMove } from "../Utils/playerMove";
import { defineWinType } from "../Utils/defineWinType";

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setisXnext] = useState(true);
  const [result, setResult] = useState({ winner: "", winningLine: [] });
  const [isDraw, setIsDraw] = useState(false);
  const [isBotEnabled, setIsBotEnabled] = useState(true);

  const [isGameActive, setIsGameActive] = useState(false);

  const [difficultyLevel, setDifficultyLevel] = useState("Easy");

  useEffect(() => {
    if (board.every((elem) => elem === null)) {
      return;
    }
    if (isXnext || !isBotEnabled) {
      return;
    }

    console.log("useEffect");
    botMove(board, setBoard, setisXnext, difficultyLevel);
  }, [board, difficultyLevel, isBotEnabled, isXnext]);

  useEffect(() => {
    const res = calculateWinner(board);

    if (res.winner) {
      console.log("res", res);
      clearTimeout(timerId);
      const winType = defineWinType(res.winningLine);

      // ВЫНЕСТИ В ФУНКЦИЮ
      switch (winType) {
        case "vertical":
          res.winningLine.forEach((elemId) => {
            document.getElementById(elemId).classList.add("winner", "vertical");
          });
          break;

        case "horizontal":
          res.winningLine.forEach((elemId) => {
            document
              .getElementById(elemId)
              .classList.add("winner", "horizontal");
          });
          break;

        case "diagonal-right":
          res.winningLine.forEach((elemId) => {
            document
              .getElementById(elemId)
              .classList.add("winner", "diagonal-right");
          });
          break;

        case "diagonal-left":
          res.winningLine.forEach((elemId) => {
            document
              .getElementById(elemId)
              .classList.add("winner", "diagonal-left");
          });
          break;

        default:
          break;
      }
    }

    switch (res.winner) {
      case "draw":
        setIsDraw(true);
        toast("Unentschieden");
        break;
      case "X":
        toast.success("X hat gewonnen");
        setResult({ winner: "X" });

        break;
      case "O":
        toast.success("O hat gewonnen");
        setResult({ winner: "O" });
        break;

      default:
        break;
    }

    console.log("res", res);
  }, [board]);

  useEffect(() => {
    const enableBotBtnRef = document.querySelector(".enableBotBtn");

    if (isGameActive) {
      enableBotBtnRef.classList.add("not-active");
    } else {
      enableBotBtnRef.classList.remove("not-active");
    }
  }, [board, isGameActive]);

  const clickHandler = (index) => {
    if (result.winner || isDraw) {
      return;
    }
    setIsGameActive(true);
    playerMove(
      index,
      board,
      result.winner,
      isDraw,
      isXnext,
      setBoard,
      setisXnext
    );
  };

  // const selectDifficultyHandler = (e) => {
  //   console.log(e.target.value);
  //   setDifficultyLevel(e.target.value);
  // };

  return (
    <div className="wrapper">
      {/* <div class="dropdown">
        <button class="dropbtn">Wählen Sie Schwierigkeit aus</button>
        <div class="dropdown-content">
          <option href="" data-value="Easy">
            Easy
          </option>
          <option href="" data-value="Normal">
            Normal
          </option>
          <option href="" data-value="Impossible">
            Impossible
          </option>
        </div>
      </div> */}

      <div className="difficultyContainer">
        <select
          onChange={(e) => setDifficultyLevel(e.target.value)}
          className="difficultySelect"
          value={difficultyLevel}
        >
          <option data-value="Easy">Easy</option>
          <option data-value="Normal">Normal</option>
          <option data-value="Impossible">Impossible</option>
        </select>
      </div>

      <div className="btnContainer">
        {board.some((elem) => elem !== null) && (
          <button
            type="button"
            className="restartBtn"
            onClick={() => {
              startNewGame(
                setBoard,
                setisXnext,
                setIsDraw,
                setResult,
                setIsGameActive
              );
            }}
          >
            Noch einmal spielen
          </button>
        )}
      </div>
      <Board
        squares={board}
        onClick={(e) => clickHandler(e)}
        winner={result.winner}
        isDraw={isDraw}
        isXnext={isXnext}
        isBotEnabled={isBotEnabled}
        setIsBotEnabled={setIsBotEnabled}
      />
    </div>
  );
};
