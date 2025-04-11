export const changeStyles = (image) => {
  const refs = {
    score: document.querySelector(".scoreText"),
    result: document.querySelector(".gameResult"),
    squares: document.querySelectorAll(".square:nth-child(-n + 6)"),
    squares2: document.querySelectorAll(".square:nth-child(3n)"),
  };
  const { score, result, squares, squares2 } = refs;

  const paintWhite = () => {
    score.style.color = "white";
    result.style.color = "white";

    squares.forEach((square) => {
      square.classList.toggle("white-background");
    });

    squares2.forEach((square) => {
      square.classList.toggle("white-background");
    });
  };
  const paintBlack = () => {
    score.style.color = "black";
    result.style.color = "black";
  };

  switch (image) {
    case "palottis1":
      paintWhite();
      break;

    case "schweiz1":
      paintWhite();
      break;

    case "schweiz2":
      paintWhite();
      break;

    case "pistenbully":
      paintBlack();
      break;

    case "matterhorn":
      paintBlack();
      break;

    default:
      return;
  }
};
