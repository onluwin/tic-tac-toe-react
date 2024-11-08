import { Square } from "./Square";

export const Board = ({ board }) => {
  return (
    <div>
      {board.map((elem, i) => {
        return <Square elem={elem} />;
      })}
    </div>
  );
};
