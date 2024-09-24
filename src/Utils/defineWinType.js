import { checkDiagonalWin } from "./checkDiagonalWin";
import { checkVerticalWin } from "./checkVerticalWin";

export const defineWinType = (winningLine) => {
  let result = "";
  let temp = checkDiagonalWin(winningLine);

  if (temp.result) {
    const { direction } = temp;
    result = `diagonal-${direction}`;
    return result;
  } else {
    temp = checkVerticalWin(winningLine);
  }

  if (temp) {
    result = "vertical";
  } else {
    result = "horizontal";
  }
  return result;
};
