export const easyMode = (copyBoard, board) => {
  let availableCells = board
    .map((cell, index) => (cell === null ? index : null))
    .filter((index) => index !== null);

  let randomIndex =
    availableCells[Math.floor(Math.random() * availableCells.length)];

  copyBoard[randomIndex] = "O";
};
