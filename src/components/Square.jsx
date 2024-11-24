import "../styles/square.css";

export const Square = ({ clickHandler, value, id }) => {
  // if (!value) {
  //   return;
  // }
  return (
    <button onClick={() => clickHandler(id)} id={id} className="square">
      {/* {value === "X" ? (
        <img className="squareImg" alt="alternative X" src="./images/X.png" />
      ) : (
        <img className="squareImg" alt="O alternative" src="./images/O.png" />
      )} */}

      {value && value}
    </button>
  );
};
