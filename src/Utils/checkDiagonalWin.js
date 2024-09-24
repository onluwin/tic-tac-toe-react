export function checkDiagonalWin(winningLine) {
  const diagonalLines = [
    { line: [0, 4, 8], direction: "right" }, // Слева направо
    { line: [2, 4, 6], direction: "left" }, // Справа налево
  ];

  if (winningLine.length !== 3) {
    return { result: false, direction: null };
  }

  const foundLine = diagonalLines.find((diagonal) =>
    winningLine.every((val, index) => val === diagonal.line[index])
  );

  return foundLine
    ? {
        result: true,
        direction: foundLine.direction,
      }
    : { result: false, direction: null };
}
