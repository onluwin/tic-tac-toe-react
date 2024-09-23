export const startNewGame = (setBoard, setisXnext, setWinner, setIsDraw) => {
  const squaresRefs = document.querySelectorAll(".square");
  // console.log("squaresRefs", squaresRefs);
  squaresRefs.forEach((elem) =>
    elem.classList.remove(
      "winner",
      "vertical",
      "diagonal-left",
      "diagonal-right"
    )
  );

  setBoard(Array(9).fill(null));
  setisXnext(true);
  setIsDraw(false);
  setWinner(null);
};
