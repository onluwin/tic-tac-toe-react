import { timerId } from "./bot/botMove";

export const startNewGame = (
  setBoard,
  setisXnext,
  setWinner,
  setIsDraw,
  setIsGameActive
) => {
  const btnRefs = document.querySelectorAll(".square");

  btnRefs.forEach((btn) => {
    btn.classList.remove(
      "winner",
      "vertical",
      "horizontal",
      "diagonal-left",
      "diagonal-right"
    );
    btn.style.pointerEvents = "auto";
  });

  setBoard(Array(9).fill(null));
  setisXnext(true);
  setIsDraw(false);
  setWinner(null);
  setIsGameActive(false);
  clearTimeout(timerId);
};
