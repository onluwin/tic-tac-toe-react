import { minimax } from "./minimax";

export let timerId;

export const botMove = (board, setBoard, setisXnext) => {
  const btnRefs = document.querySelectorAll(".square");
  btnRefs.forEach((btn) => (btn.style.pointerEvents = "none"));
  let bestScore = -Infinity;
  let move;

  const copyBoard = [...board];

  for (let i = 0; i < board.length; i++) {
    if (copyBoard[i] === null) {
      copyBoard[i] = "O";
      let score = minimax(copyBoard, 0, false);
      copyBoard[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  copyBoard[move] = "O";

  timerId = setTimeout(() => {
    setBoard(copyBoard);
    setisXnext(true);
    btnRefs.forEach((btn) => (btn.style.pointerEvents = "auto"));
  }, 500);
};
