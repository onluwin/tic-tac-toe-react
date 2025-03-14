const basePath = window.location.pathname.includes("tic-tac-toe-react")
  ? "/tic-tac-toe-react"
  : "";

export const clickSound = new Audio(`${basePath}/click-sound.wav`);
export const winnerSound = new Audio(`${basePath}/hooray-sound.wav`);
