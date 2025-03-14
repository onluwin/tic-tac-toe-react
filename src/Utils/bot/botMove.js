// import { clickSound } from "../audio/audios";
import { clickSound } from "../audio/audios";
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

    clickSound.play().catch((e) => console.log(e));
  }, 500);
};
