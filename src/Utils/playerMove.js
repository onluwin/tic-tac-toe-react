export const playerMove = (
  index,
  board,
  winner,
  isDraw,
  isXnext,
  setBoard,
  setisXnext
) => {
  console.log("index", index);
  const boardCopy = [...board];

  console.log("board[index]", board[index]);
  console.log("Boolean(board[index])", Boolean(board[index]));

  if (board[index]) {
    console.log("exit");
    return;
  }

  if (board[index] === null && (!isDraw || !winner)) {
    const statement = isXnext ? "X" : "O";
    console.log("statement", statement);
    boardCopy[index] = statement;
    setBoard(boardCopy);
    setisXnext(!isXnext);
    const clickSound = new Audio("click-sound.wav"); // Замените на свой файл
    clickSound.volume = 1;
    clickSound.play();
  }
};
