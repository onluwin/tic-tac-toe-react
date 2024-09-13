export const startNewGame = (setBoard, setisXnext, setWinner, setIsDraw) => {
  setBoard(Array(9).fill(null));
  setisXnext(true);
  setIsDraw(false);
  setWinner(null);
};
