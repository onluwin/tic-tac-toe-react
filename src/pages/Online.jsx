import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import socket from "../Utils/socket";
import axios from "axios";

export const Online = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [currentRoomId, setCurrentRoomId] = useState(null);
  const navigate = useNavigate();

  const { roomId } = useParams();

  useEffect(() => {
    console.log("currentRoomId", currentRoomId);
    if (!currentRoomId) {
      return;
    }
    navigate(`/online/room/${currentRoomId}`);
  }, [currentRoomId]);

  if (roomId) {
    return <Outlet board={board} />; // Рендерим только GameRoom
  }

  const createRoomClickHandler = async () => {
    // socket.emit("createNewRoom", arg, (response) => {
    //   console.log("response", response);
    // });

    axios
      .post("http://localhost:3001/api/rooms", { userId: socket.id })
      .then(({ data }) => {
        console.log("Ответ от сервера:", data);
        setBoard(data.board);
        setCurrentRoomId(data.roomId);
      })
      .catch((error) => {
        console.error("Ошибка при запросе:", error);
      });

    // socket.emit("createNewRoom", (response) => {
    //   console.log("response", response); // Здесь вы обрабатываете ответ

    //   if (response.ok) {
    //     setCurrentRoomId(response.roomId);
    //     navigate(`room/${response.roomId}`);
    //   }
    // });
  };

  return (
    <div className="wrapper">
      <h1>Type room id</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputValue) {
            return;
          }

          axios.get(`http://localhost:3001/api/rooms/${roomId}`);

          // socket.emit(
          //   "connectToRoomById",
          //   inputValue.toUpperCase(),
          //   ({ ok, msg, foundRoom }) => {
          //     setErrorMsg("");
          //     if (!ok) {
          //       return setErrorMsg(msg);
          //     }
          //     // console.log(msg);

          //     console.log("foundRoom.roomId", foundRoom.roomId);

          //     //   socket.emit("joinRoom", foundRoom.roomId);
          //     setCurrentRoomId(foundRoom.roomId);
          //     navigate(`room/${foundRoom.roomId}`);
          //   }
          // );
        }}
      >
        <input
          style={{ textTransform: "uppercase" }}
          placeholder="Room ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={createRoomClickHandler}>
        Create new room
      </button>

      {errorMsg && <p style={{ color: "white" }}>{errorMsg}</p>}
    </div>
  );
};
