import { minimax } from "../minimax";

export const impossibleMode = (copyBoard, board) => {
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
  copyBoard[move] = "O";
};
