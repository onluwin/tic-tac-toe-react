import { minimax } from "../minimax";
import { easyMode } from "./easyMode";

export const hardMode = (copyBoard, board) => {
  let bestScore = -Infinity;
  let move;

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

  let randomNumber = Math.random();

  // Final move

  randomNumber < 0.85 ? (copyBoard[move] = "O") : easyMode(copyBoard, board);

  // Complicated option

  // nullCount === 6
  //   ? randomNumber < 0.99
  //     ? (copyBoard[move] = "O")
  //     : easyMode(copyBoard, board)
  //   : randomNumber < 0.75
  //   ? (copyBoard[move] = "O")
  //   : easyMode(copyBoard, board);
};
