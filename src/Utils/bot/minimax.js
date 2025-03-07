import { checkWinnerFull } from "../winChecks/checkWinnerFull";

export function minimax(copyBoard, depth, isMaximizing) {
  let winner = checkWinnerFull(copyBoard);
  if (winner === "X") return -10;
  if (winner === "O") return 10;
  if (!copyBoard.includes(null)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < copyBoard.length; i++) {
      if (copyBoard[i] === null) {
        copyBoard[i] = "O";
        let score = minimax(copyBoard, depth + 1, false);
        copyBoard[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < copyBoard.length; i++) {
      if (copyBoard[i] === null) {
        copyBoard[i] = "X";
        let score = minimax(copyBoard, depth + 1, true);
        copyBoard[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}
