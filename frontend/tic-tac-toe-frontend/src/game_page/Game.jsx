import Board from "./board/Board";
import Players from "./players/Players";
import React, { useState } from "react";
import { GameWrapper } from "./styles/game.styled";
import ChatSystem from "./chat_system/ChatSystem";
import { useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from "react-copy-to-clipboard";
import EnvObj from "../EnvObj"

const Game = () => {
  let roomCode = localStorage.getItem("roomCode");
  let username = localStorage.getItem("name");
  const [leftClient, setLeftClient] = useState("");
  const [rightClient, setRightClient] = useState("");
  const [flag, setFlag] = useState(true);
  const [both, setBoth] = useState(false);
  const navigate = useNavigate();

  const [socketUrl, setSocketUrl] = useState(
    EnvObj.userWSApiStartingString +
    roomCode + "/" + username + "/"
  );
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    shouldReconnect: (closeEvent) => true,
    reconnectAttempts: 10,
    reconnectInterval: 2000,
  });

  useEffect(() => {


    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
      const clientData = JSON.parse(lastMessage.data);
      if (localStorage.getItem("name") == clientData.first_client) {
        setLeftClient(clientData.first_client);
        setRightClient(clientData.second_client);
        setBoth(true)
      }
      if (clientData.second_client === null) {
        setRightClient("Waiting...😴😴");
        setBoth(false)
      }
      else if (localStorage.getItem("name") === clientData.second_client) {
        setLeftClient(clientData.second_client);
        setRightClient(clientData.first_client);
        setBoth(true)
      }
      if (clientData.second_client === false) {
        setRightClient("Disconnected");
        setFlag(false);
        setBoth(false)
        setTimeout(() => {
          navigate('/result', {
            state: {
              winner: true
            },
          })
        }, 3000)
      }
    }

    username && roomCode ? "" : location.assign("/");
    window.addEventListener("unload", () => {
      localStorage.clear();
    });
    return () => {
      setFlag(true);
      // localStorage.clear();
    }


  }, [lastMessage, setMessageHistory]);


  return (
    <>

      <GameWrapper>
        <ChatSystem />
        <div className="wrapper">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="banner2">
          <div className='room-code'>
            <CopyToClipboard text={roomCode} onCopy={() => alert("Copied Successfully !!!")}>

              <Button variant="outlined">Copy Room Code</Button>
            </CopyToClipboard>
          </div>
          <div className="upper">
            <div className="player">
              <Players name={leftClient} />
            </div>
            <div className="board">
              <Board both={both} />
            </div>
            <div className="player">
              <Players name={rightClient} />
            </div>
          </div>
          <div className="bottom">
            <div className="player2">
              <Players name={leftClient} />
            </div>
            <div className="player2">
              <Players name={rightClient} />
            </div>
          </div>
        </div>
      </GameWrapper>
      {!flag ? (
        <>
          <Alert
            severity="info"
            style={{
              width: "fit-content",
              position: "absolute",
              top: "5%",
              left: "50%",
              transform: "translate(-50%, 0)",
              zIndex: "10000"
            }}
          >
            Your Opponent got Disconnected!
          </Alert>
        </>
      ) : <></>}

    </>
  );
};

export default Game;