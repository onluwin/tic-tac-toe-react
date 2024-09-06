import "../styles/square.css";

export const Square = ({ clickHandler }) => {
  return (
    <button onClick={clickHandler} className="square">
      x
    </button>
  );
};
