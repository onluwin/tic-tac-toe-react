export const calculateWinner = (squares, setIsDraw) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // console.log("a b c", a, b, c);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log("squares[a]", squares[a]);
      // console.log("squares[b]", squares[b]);
      // console.log("squares[c]", squares[c]);
      console.log("a b c", a, b, c);
      return { winner: squares[a], winningLine: [a, b, c] };

      // return squares[a];
    }
  }

  if (!squares.includes(null)) {
    console.log("draw");
    setIsDraw(true);
    return { winner: null, winningLine: [] };
  }

  return { winner: null, winningLine: [] };
};
