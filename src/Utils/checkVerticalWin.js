export function checkVerticalWin(winningLine) {
  const verticalLines = [
    { line: [0, 3, 6], name: "vertical1" },
    { line: [1, 4, 7], name: "vertical2" },
    { line: [2, 5, 8], name: "vertical3" },
  ];

  if (winningLine.length !== 3) {
    return { result: false, winningIndex: null };
  }

  const foundLine = verticalLines.find((vertical) =>
    winningLine.every((val, index) => val === vertical.line[index])
  );

  return foundLine ? true : false;
}
