export const stopRainEffect = (intervalId) => {
  const rainContainer = document.getElementById("rain");

  clearInterval(intervalId); // Останавливаем интервал
  // Очищаем все оставшиеся элементы дождя
  const remainingRainDrops = rainContainer.querySelectorAll(".symbol");
  remainingRainDrops.forEach((drop) => drop.remove());
};
