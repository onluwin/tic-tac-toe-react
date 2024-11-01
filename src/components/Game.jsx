import { useEffect, useState } from "react";

import "../styles/game.css";
import { Board } from "./Board";
import toast from "react-hot-toast";
import { calculateWinner } from "../Utils/calculateWinner";
import { startNewGame } from "../Utils/startNewGame";
import { botMove, timerId } from "../Utils/bot/botMove";
import { playerMove } from "../Utils/playerMove";
import { defineWinType } from "../Utils/defineWinType";
import socket from "../Utils/socket";

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [mode, setMode] = useState("bot");
  const [isXnext, setisXnext] = useState(true);
  const [result, setResult] = useState({ winner: "", winningLine: [] });
  const [isDraw, setIsDraw] = useState(false);
  // const [isBotEnabled, setIsBotEnabled] = useState(true);

  const [isGameActive, setIsGameActive] = useState(false);

  const [difficultyLevel, setDifficultyLevel] = useState("Normal");
  const [scoreCounter, setScoreCounter] = useState({ x: 0, o: 0, draws: 0 });

  useEffect(() => {
    if (board.every((elem) => elem === null)) {
      return;
    }
    if (isXnext || mode !== "bot") {
      return;
    }

    console.log("useEffect");
    botMove(board, setBoard, setisXnext, difficultyLevel);
  }, [board, mode, isXnext]);

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
        setScoreCounter({ ...scoreCounter, draws: scoreCounter.draws + 1 });
        break;
      case "X":
        console.log(scoreCounter);

        toast.success("X hat gewonnen");
        setResult({ winner: "X" });
        setScoreCounter({ ...scoreCounter, x: scoreCounter.x + 1 });

        break;
      case "O":
        console.log(scoreCounter);
        toast.success("O hat gewonnen");
        setResult({ winner: "O" });
        setScoreCounter({ ...scoreCounter, o: scoreCounter.o + 1 });

        break;

      default:
        break;
    }
  }, [board]);

  useEffect(() => {
    const ref = document.querySelector(".difficultyContainer > select");
    if (!ref) {
      return;
    }
    if (board.filter((cell) => cell === null).length !== 9) {
      ref.id = "difficulty-not-active";
    } else {
      ref.id = null;
    }
  }, [board]);

  useEffect(() => {
    const enableBotBtnRef = document.querySelector(".enableBotBtn");

    if (isGameActive) {
      enableBotBtnRef.classList.add("not-active");
    } else {
      enableBotBtnRef.classList.remove("not-active");
    }
  }, [board, isGameActive]);

  useEffect(() => {
    console.log("board", board);
  }, [board]);

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

  return (
    <div className="wrapper">
      <div>
        <p className="scoreText">
          {mode === "bot"
            ? `Spieler: ${scoreCounter.x} / Unentschieden: ${scoreCounter.draws} / AI: ${scoreCounter.o}`
            : `X: ${scoreCounter.x} / Unentschieden: ${scoreCounter.draws} O: ${scoreCounter.o}`}
        </p>
        <button
          className="scoreResetBtn"
          type="button"
          onClick={() => {
            setScoreCounter({ x: 0, o: 0, draws: 0 });
          }}
        >
          Reset score
        </button>
      </div>

      {mode === "bot" && (
        <div className="difficultyContainer">
          <select
            onChange={(e) => setDifficultyLevel(e.target.value)}
            className="difficultySelect"
            value={difficultyLevel}
          >
            <option data-value="Easy">Easy</option>
            <option data-value="Normal">Normal</option>
            <option data-value="Hard">Hard</option>
            <option data-value="Impossible">Impossible</option>
          </select>
        </div>
      )}

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
        isBotEnabled={mode === "bot"}
        setMode={setMode}
        mode={mode}
      />
      <button
        type="button"
        onClick={() => {
          // console.log("went");
          // socket.on("gameState", (state) => {
          //   console.log("HTTP went successfuly");
          //   console.log("state", state);
          //   setBoard(state);
          //   setIsXNext(state.filter(Boolean).length % 2 === 0);
          // });
          socket.emit("hello", "world", (response) => {
            console.log(response); // "got it"
          });
        }}
      >
        HTTP
      </button>
    </div>
  );
};
