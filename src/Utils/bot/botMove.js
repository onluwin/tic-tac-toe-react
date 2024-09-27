import { easyMode } from "./difficulties/easyMode";
import { impossibleMode } from "./difficulties/impossibleMode";
import { minimax } from "./minimax";

export let timerId;

export const botMove = (board, setBoard, setisXnext, difficultyLevel) => {
  const copyBoard = [...board];
  const btnRefs = document.querySelectorAll(".square");
  btnRefs.forEach((btn) => (btn.style.pointerEvents = "none"));

  switch (difficultyLevel) {
    case "Easy":
      easyMode(copyBoard, board);
      break;

    case "Normal":
      break;

    case "Impossible":
      impossibleMode(copyBoard, board);
      break;

    default:
  }

  timerId = setTimeout(() => {
    setBoard(copyBoard);
    setisXnext(true);
    btnRefs.forEach((btn) => (btn.style.pointerEvents = "auto"));
  }, 500);
};
