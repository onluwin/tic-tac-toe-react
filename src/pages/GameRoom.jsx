import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../Utils/socket";
import { Board } from "../components/Offline board/Board";

export const GameRoom = () => {
  const { roomId } = useParams(); // Получаем roomId из параметров

  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    // Отправляем событие присоединения к комнате
    console.log("roomId", roomId);
    if (!roomId) {
      return;
    }
    console.log("roomId", roomId);

    // socket.emit("connectToRoomById", roomId, (msg) => {
    //   console.log("msg", msg);
    // });

    socket.emit("joinRoom", roomId, (res) => {
      console.log(res);
      if (res.ok) {
        socket.emit("getGameState", roomId, (result) => {
          console.log(result);
          // console.log("result", result);
          setBoard(result.board);
          setIsXNext(result.isXNext);
        });
      }
    });

    // console.log("playerCount", playerCount);
    socket.on("sendMessage", (msg) => {
      console.log(msg);
    });

    // Очищаем обработчики событий при размонтировании
    return () => {
      //   socket.off("playerCount");
      //   socket.disconnect();
    };
  }, [roomId]);

  const clickHandler = () => {
    socket.emit("sendMessage", "new Message von Nikita", (msg) => {
      console.log(msg);
    });
  };

  return (
    <div>
      <h2>Your room: {roomId}</h2>
      <div style={{ fontSize: "30px" }}>GAME TIC TAC TOE ONLINE</div>
      <button onClick={clickHandler}>Send message</button>
      <Board squares={board} />
    </div>
  );
};
