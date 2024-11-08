import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import socket from "../Utils/socket";

export const Online = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [currentRoomId, setCurrentRoomId] = useState(null);
  const navigate = useNavigate();
  const { roomId } = useParams();
  if (roomId) {
    return <Outlet />; // Рендерим только GameRoom
  }

  //   useEffect(() => {
  //     if (!currentRoomId) {
  //       return;
  //     }
  //     navigate(`/room/${currentRoomId}`);
  //   }, [currentRoomId]);

  const createRoomClickHandler = () => {
    // socket.emit("createNewRoom", arg, (response) => {
    //   console.log("response", response);
    // });
    socket.emit("createNewRoom", (response) => {
      console.log(response); // Здесь вы обрабатываете ответ
      navigate(`room/${response.roomId}`);
      setCurrentRoomId(response.roomId);
    });
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

          socket.emit(
            "connectToRoomById",
            inputValue.toUpperCase(),
            ({ ok, msg, foundRoom }) => {
              setErrorMsg("");
              if (!ok) {
                return setErrorMsg(msg);
              }
              // console.log(msg);

              console.log("foundRoom.roomId", foundRoom.roomId);

              //   socket.emit("joinRoom", foundRoom.roomId);
              setCurrentRoomId(foundRoom.roomId);
              navigate(`room/${foundRoom.roomId}`);
            }
          );
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

      {/* TESTS */}
      {/* <button
        type="button"
        onClick={() => {
          socket.emit("hello", "world", (response) => {
            console.log(response); // "got it"
          });
        }}
      >
        HTTP
      </button>
      <button
        type="button"
        onClick={() => {
          socket.emit("init", "12gfds54-gg", (response) => {
            console.log(response); // "got it"
          });
        }}
      >
        Init
      </button> */}
    </div>
  );
};
