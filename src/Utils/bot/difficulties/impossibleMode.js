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

  // let randomNumber = Math.random();

  // Final move

  // randomNumber < 0.8 ? (copyBoard[move] = "O") : easyMode(copyBoard, board);

  // Final move

  // let bestScore = -Infinity;
  // let move;

  // for (let i = 0; i < board.length; i++) {
  //   if (copyBoard[i] === null) {
  //     copyBoard[i] = "O";
  //     let score = minimax(copyBoard, 0, false);
  //     copyBoard[i] = null;
  //     if (score > bestScore) {
  //       bestScore = score;
  //       move = i;
  //     }
  //   }
  // }

  // // Final move
  // copyBoard[move] = "O";
};
