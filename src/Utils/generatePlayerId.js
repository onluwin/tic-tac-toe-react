export const generatePlayerId = () => {
  let playerId = "";
  for (let i = 0; i < 4; i++) {
    // Генерируем случайное число от 0 до 9
    const randomDigit = Math.floor(Math.random() * 10);
    playerId += randomDigit.toString(); // Преобразуем число в строку и добавляем к ID
  }
  return playerId; // Возвращаем сгенерированный ID
};

// Пример использования
// const newPlayerId = generatePlayerId();
// console.log(newPlayerId); // Выводит, например, "4821"
