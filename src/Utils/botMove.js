export const botMove = (board, setBoard, setisXnext) => {
  const boardCopy = [...board];
  let availableCells = board
    .map((cell, index) => (cell === null ? index : null))
    .filter((index) => index !== null); // Получаем список пустых клеток

  //   let randomIndex =
  //     availableCells[Math.floor(Math.random() * availableCells.length)];

  //   board[randomIndex] = "O";

  let randomIndex =
    availableCells[Math.floor(Math.random() * availableCells.length)];

  boardCopy[randomIndex] = "O";

  setTimeout(() => {
    setBoard(boardCopy);
    setisXnext(true);
  }, 500);

  console.log("availableCells", availableCells);

  //   document.querySelector(`[data-index='${randomIndex}']`).textContent = "O";
  //   document.querySelector(`[id]`).textContent = "O";
};
