import "../styles/square.css";
import "../styles/rain.css";
import x from "../images/X.png";
import o from "../images/O.png";

export const Square = ({ clickHandler, value, id }) => {
  console.log(value);
  if (!value) {
    return (
      <button
        onClick={() => clickHandler(id)}
        id={id}
        className="square"
      ></button>
    );
  }
  // return (
  //   <button onClick={() => clickHandler(id)} id={id} className="square">
  //     {/* {value === "X" ? (
  //       <img className="squareImg" alt="alternative X" src="./images/X.png" />
  //     ) : (
  //       <img className="squareImg" alt="O alternative" src="./images/O.png" />
  //     )} */}

  //     {value && value}
  //   </button>
  // );

  return (
    <button onClick={() => clickHandler(id)} id={id} className="square">
      {value && <img src={value === "X" ? x : o} className="square-pic" />}
    </button>
  );
};
