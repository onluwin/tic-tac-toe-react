export const changeStyles = (image) => {
  const refs = {
    score: document.querySelector(".scoreText"),
    result: document.querySelector(".gameResult"),
    squares: document.querySelectorAll(".square:nth-child(-n + 6)"),
    squares2: Array.from(document.querySelectorAll(".square")).slice(-3),
  };
  const { score, result, squares, squares2 } = refs;

  const paintSquares = (color) => {
    switch (color) {
      case "white":
        console.log(squares, squares2);
        squares.forEach((elem) => {
          elem.classList.remove("black-background");
          elem.classList.add("white-background");
        });
        squares2.forEach((elem) => {
          elem.classList.remove("black-background");
          elem.classList.add("white-background");
        });
        break;

      case "black":
        squares.forEach((elem) => {
          elem.classList.remove("white-background");
          elem.classList.add("black-background");
        });
        squares2.forEach((elem) => {
          elem.classList.remove("white-background");
          elem.classList.add("black-background");
        });
        break;

      default:
        break;
    }
  };

  const paintElse = () => {
    const ref = {
      score: document.querySelector(".scoreText"),
      resetBtn: document.querySelector(".scoreResetbtn"),
    };
  };

  switch (image) {
    case "palottis1":
      paintSquares("white");
      break;

    case "schweiz1":
      paintSquares("white");
      break;

    case "schweiz2":
      paintSquares("white");
      break;

    case "pistenbully":
      paintSquares("white");
      break;

    case "matterhorn":
      paintSquares("white");
      break;
    case "black":
      paintSquares("white");
      break;

    case "default":
      break;

    default:
      return;
  }
};
