import "../styles/square.css";

export const Square = ({ clickHandler, value, id }) => {
  return (
    <button onClick={() => clickHandler(id)} id={id} className="square">
      {value && value}
    </button>
  );
};
