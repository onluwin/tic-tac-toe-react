import { useParams } from "react-router-dom";

export const GameRoom = () => {
  const { roomId } = useParams(); // Получаем roomId из параметров

  return (
    <div>
      <h2>Your room: {roomId}</h2>
      <div style={{ fontSize: "30px" }}>GAME TIC TAC TOE ONLINE</div>
    </div>
  );
};
