export let rainEffectIntervalId;

export function startRainEffect(symbol) {
  const rainContainer = document.getElementById("rain");
  const symbols = ["X", "O"]; // Символы для дождя
  const rainCount = 50; // Максимальное количество символов на экране

  // Функция для добавления одного "капельного" символа
  function createRainDrop() {
    const rainDrop = document.createElement("div");

    rainDrop.classList.add("symbol");
    rainDrop.textContent =
      symbol || symbols[Math.floor(Math.random() * symbols.length)];

    // Устанавливаем случайные позиции, размеры и длительность падения
    rainDrop.style.left = `${Math.random() * 100}vw`;
    rainDrop.style.animationDuration = `${Math.random() * 2 + 3}s`;
    rainDrop.style.fontSize = `${Math.random() * 2 + 1}rem`;

    rainContainer.appendChild(rainDrop);

    // Удаляем символ после завершения анимации
    rainDrop.addEventListener("animationend", () => {
      rainDrop.remove();
    });
  }

  // Запускаем добавление символов с интервалом
  rainEffectIntervalId = setInterval(() => {
    for (let i = 0; i < 5; i++) {
      createRainDrop(); // Создаём несколько символов одновременно
    }
  }, 100); // Каждые 200 мс добавляются символы

  // Останавливаем добавление новых символов через 5 секунд
  setTimeout(() => {
    clearInterval(rainEffectIntervalId); // Останавливаем интервал
    // Очищаем все оставшиеся элементы дождя
    const remainingRainDrops = rainContainer.querySelectorAll(".symbol");
    remainingRainDrops.forEach((drop) => drop.remove());
  }, 5000); // 5000 мс = 5 секунд
}
