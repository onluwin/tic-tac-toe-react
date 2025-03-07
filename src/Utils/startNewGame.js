import { clickSound, winnerSound } from "./audio/audios";
import { pauseAudios } from "./audio/pauseAudios";
import { timerId } from "./bot/botMove";
import { stopRainEffect } from "./rainEffect/stopRainEffect";
import { rainEffectIntervalId } from "./startRainEffect";

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
  pauseAudios(winnerSound, clickSound);
  stopRainEffect(rainEffectIntervalId);
  // setScoreCounter({ x: 0, o: 0, draws: 0 });
};
