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

  const paintElse = (picture, color) => {
    const ref = {
      score: document.querySelector(".scoreText"),
      resetBtn: document.querySelector(".scoreResetbtn"),
      gameResult: document.querySelector(".gameResult"),
      enableBotBtn: document.querySelector(".enableBotBtn"),
    };

    const { score, resetBtn, gameResult, enableBotBtn } = ref;
    const refsArray = [score, gameResult, enableBotBtn];

    // if (color === "white") {
    //   refsArray.forEach((elem) => {
    //     console.log(elem);
    //     elem.style.color = "white";
    //   });
    // } else {
    //   refsArray.forEach((elem) => {
    //     console.log(elem);
    //     elem.style.color = "black";
    //   });
    // }

    switch (picture) {
      case "pistenbully":
        score.style.color = "black";
        break;

      case "palottis1":
        score.style.color = "white";
        result.style.color = "white";

        break;

      case "matterhorn":
        score.style.color = "black";
        result.style.color = "white";

        break;

      case "schweiz2":
        score.style.color = "white";
        result.style.color = "white";

        break;

      case "black":
        score.style.color = "black";
        result.style.color = "black";
        break;

      default:
        break;
    }
  };

  switch (image) {
    case "palottis1":
      paintSquares("white");
      paintElse("palottis1");
      break;

    case "schweiz1":
      paintSquares("white");
      paintElse("schweiz1");

      break;

    case "schweiz2":
      paintSquares("white");
      paintElse("schweiz2");

      break;

    case "pistenbully":
      paintSquares("white");
      paintElse("pistenbully");

      break;

    case "matterhorn":
      paintSquares("white");
      paintElse("matterhorn");

      break;
    case "black":
      paintSquares("white");
      paintElse("black");

      break;

    case "dark":
      paintSquares("black");
      paintElse("black");

      break;

    case "default":
      break;

    default:
      return;
  }
};
