import { easyMode } from "./difficulties/easyMode";
import { hardMode } from "./difficulties/hardMode";
import { impossibleMode } from "./difficulties/impossibleMode";
import { normalMode } from "./difficulties/normalMode";

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
      normalMode(copyBoard, board);
      break;

    case "Hard":
      hardMode(copyBoard, board);
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
    const clickSound = new Audio("click-sound.wav"); // Замените на свой файл
    clickSound.play();
  }, 500);
};
