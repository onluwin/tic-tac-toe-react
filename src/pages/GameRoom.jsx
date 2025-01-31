import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../Utils/socket";
import { Board } from "../components/Board";
import axios from "axios";
import { calculateWinner } from "../Utils/calculateWinner";

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
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  // useEffect(() => {
  //   // Отправляем событие присоединения к комнате
  //   console.log("roomId", roomId);
  //   if (!roomId) {
  //     return;
  //   }

  //   socket.emit("joinRoom", roomId, (res) => {
  //     console.log(res);
  //     // if (res.ok) {
  //     //   console.log("roomId", roomId);
  //     //   // socket.emit("getGameState", roomId, (result) => {
  //     //   //   console.log(result);
  //     //   //   // console.log("result", result);
  //     //   //   setBoard(result.board);
  //     //   //   setIsXNext(result.isXNext);
  //     //   // });

  //     //   // socket.emit("gameStateUpdate", roomId, (response) => {
  //     //   //   // console.log("board,isXNext", response.board, response.isXNext);
  //     //   //   console.log("response", response);
  //     //   //   if (!response.board) {
  //     //   //     return;
  //     //   //   }
  //     //   //   setBoard(response.board);
  //     //   //   setIsXNext(response.isXNext);
  //     //   // });

  //     //   // axios
  //     //   //   .get(`http://localhost:3001/api/rooms/${roomId}`)
  //     //   //   .then(({ data }) => {
  //     //   //     console.log("data", data);
  //     //   //     setCurrentPlayer(data.currentPlayer);
  //     //   //     setBoard(data.board);
  //     //   //     console.log("players", data.players);
  //     //   //   });
  //     // }
  //   });

  //   socket.on("update", (gameState) => {
  //     setBoard(gameState.board);
  //     setCurrentPlayer(gameState.currentPlayer);
  //     setWinner(gameState.winner);
  //   });
  // }, [roomId]);

  // useEffect(() => {
  //   socket.emit("joinRoom", roomId, (res) => {
  //     if (!res.ok) {
  //       console.error("An error occured");
  //     }
  //   });

  //   // Слушаем обновления игры через сокеты
  //   socket.on("update", (updatedGameData) => {
  //     console.log("Game updated via socket:", updatedGameData);
  //   });

  //   return () => {
  //     socket.off("update"); // Удаляем слушатель при размонтировании
  //     socket.emit("leave_room", roomId); // Выходим из комнаты
  //   };
  // }, [roomId]);

  useEffect(() => {
    if (!roomId) {
      return;
    }
    console.log("roomId", roomId);

    socket.emit("get", (res) => {
      console.log("res", res);
    });

    const fetchGameData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/room/${roomId}`
        );
        console.log("response", response);
      } catch (err) {
        console.error("Error fetching game data:", err);
      }
    };
    console.log("weit");
    // fetchGameData();
  }, [roomId]);

  socket.on("get", (data) => {
    console.log("data", data);
  });

  const clickHandler = (i) => {
    const boardCopy = [...board];
    if (board[i]) {
      return console.log("exit");
    }
    boardCopy[i] = currentPlayer;
    console.log("boardCopy", boardCopy);

    const newWinner = calculateWinner(boardCopy);
    console.log("newWinner", newWinner);

    const newState = {
      board: boardCopy,
      currentPlayer: currentPlayer === "X" ? "O" : "X",
      winner: newWinner.winner,
    };

    setBoard(newState.board);
    setCurrentPlayer(newState.currentPlayer);
    setWinner(newState.winner);

    socket.emit("update", roomId, newState);

    axios
      .post(`http://localhost:3001/api/rooms/${roomId}`, {
        newBoard: boardCopy,
        roomId,
      })
      .then(({ data }) => {
        console.log("Ответ от сервера:", data);
        setBoard(data.result.board);
        setCurrentPlayer(data.result.currentPlayer);
      })
      .catch((error) => {
        console.error("Ошибка при запросе:", error);
      });
    // const statement = isXNext ? "X" : "O";

    // // setBoard(boardCopy);
    // socket.emit("updateBoard", boardCopy, roomId, ({ newState }) => {
    //   // console.log("response", response);
    //   const { board, isXNext, players } = newState;
    //   console.log("newState", newState);
    //   setBoard(board);
    //   setIsXNext(isXNext);
    // });
    // socket.emit("gameStateUpdate", roomId, ({ board, isXNext, players }) => {
    //   console.log("board,isXNext, players", board, isXNext, players);
    //   setBoard(board);
    //   setIsXNext(isXNext);
    // });
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <h2>Your room: {roomId}</h2>
      <div style={{ fontSize: "30px" }}>GAME TIC TAC TOE ONLINE</div>
      <Board
        squares={board}
        onClick={clickHandler}
        winner={null}
        isDraw={null}
        isXnext={isXNext}
        onlineMode={true}
      />
    </div>
    // <Board squares={board} />
  );
};
