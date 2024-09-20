export function checkVerticalWin(winningLine) {
  // Возможные вертикальные линии
  const vertical1 = [0, 3, 6];
  const vertical2 = [1, 4, 7];
  const vertical3 = [2, 5, 8];

  // Проверяем, является ли line одной из вертикальных линий
  return (
    winningLine.length === 3 &&
    (winningLine.every((val, index) => val === vertical1[index]) ||
      winningLine.every((val, index) => val === vertical2[index]) ||
      winningLine.every((val, index) => val === vertical3[index]))
  );
}
