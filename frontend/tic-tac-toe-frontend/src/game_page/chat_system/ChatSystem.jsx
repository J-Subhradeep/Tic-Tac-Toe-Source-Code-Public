import React, { useState, useEffect } from "react";
import { ChatWrapper } from "../styles/chatbox.styled";
import useWebSocket, { ReadyState } from "react-use-websocket";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatSend from "./ChatSend";
import PopIcon from "./PopIcon";
import Chat_sound from "../../assets/audios/game-sounds/Message-pop.mp3";
import EnvObj from "../EnvObj"

const ChatSystem = () => {
  const [socketUrl, setSocketUrl] = useState(EnvObj.chatWSApiString);

  const [messageHistory, setMessageHistory] = useState([]);
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  // Unseen chats
  const [unseenChatsFromOthers, setUnseenChatsFromOthers] = useState(0);
  const [unseenChatsFromSender, setUnseenChatsFromSender] = useState(0);

  // Chat audio
  const [playNewMessageSound, setPlayNewMessageSound] = useState(false);

  const playSound = () => {
    const audio = new Audio(Chat_sound);
    audio.play();
  };

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    shouldReconnect: (closeEvent) => true,
    reconnectAttempts: 10,
    reconnectInterval: 2000,
  });

  useEffect(() => {
    // Whenever a message is received
    if (lastMessage !== null) {
      setMessageHistory((prev) => [...prev, JSON.parse(lastMessage.data)]);

      // To check unseen chats from others
      const newMessage = JSON.parse(lastMessage.data);
      if (!isChatboxOpen) {
        if (newMessage.from === localStorage.getItem("symbol")) {
          setUnseenChatsFromSender((prevCount) => prevCount + 1);
        } else {
          setUnseenChatsFromOthers((prevCount) => prevCount + 1);
          setPlayNewMessageSound(true);
        }
      }
    }
  }, [lastMessage, setMessageHistory]);

  // Function to reset unseen chats to zero
  const markMessagesAsSeen = () => {
    setUnseenChatsFromSender(0);
    setUnseenChatsFromOthers(0);
  };

  useEffect(() => {
    if (playNewMessageSound) {
      playSound();
      // Set the state back to false after playing the sound
      setPlayNewMessageSound(false);
    }
  }, [playNewMessageSound]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  // useEffect(() => {
  //   // console.log("WebSocket Connection Status:", readyState);
  // }, [readyState]);

  return (
    <ChatWrapper>
      <div className="container">
        <PopIcon
          unseenChats={
            localStorage.getItem("symbol") === "sender"
              ? unseenChatsFromSender
              : unseenChatsFromOthers
          }
          onClick={markMessagesAsSeen}
          setIsChatboxOpen={setIsChatboxOpen}
          isChatboxOpen={isChatboxOpen}
        />

        <div className="chat-popup" id="myForm">
          <ChatHeader
            setIsChatboxOpen={setIsChatboxOpen}
            isChatboxOpen={isChatboxOpen}
          />
          
          <ChatBody messageHistory={messageHistory} />

          <div className="chat-send-wrapper">
            <ChatSend sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </ChatWrapper>
  );
};

export default ChatSystem;
