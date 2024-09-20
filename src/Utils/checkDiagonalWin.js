export function checkDiagonalWin(winningLine) {
  // Диагональные линии крестиков-ноликов
  const diagonal1 = [0, 4, 8]; // Слева направо
  const diagonal2 = [2, 4, 6]; // Справа налево

  // Проверка, является ли line одной из диагональных линий
  // if (
  //   JSON.stringify(winningLine) === JSON.stringify(diagonal1) ||
  //   JSON.stringify(winningLine) === JSON.stringify(diagonal2)
  // ) {
  //   return true; // Это диагональ
  // }

  if (JSON.stringify(winningLine) === JSON.stringify(diagonal1)) {
    return { result: true, direction: "right" }; // Это диагональ
  } else if (JSON.stringify(winningLine) === JSON.stringify(diagonal2)) {
    return { result: true, directionL: "left" };
  }
  return false; // Это не диагональ
}
