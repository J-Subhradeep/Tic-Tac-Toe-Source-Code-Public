import React, { useRef, useEffect, useState } from "react";
import { ChatBodyWrapper } from "../styles/chatbody.styled";

const ChatBody = ({ messageHistory }) => {
  const chatBoxRef = useRef(null);

  // Scroll to the bottom of the chat box
  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messageHistory]);

  return (
    <div className="messages" ref={chatBoxRef} id="scrollChat">
      <ChatBodyWrapper>
        <div className="chat-messages">
          {messageHistory.map((message, index) => {
            const isChatUser = message.from === localStorage.getItem("symbol");
            return (
              <div
                className={`message ${isChatUser ? "sender" : ""}`}
                key={index}
              >
                <div className="content">
                  <p>{message.msg}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ChatBodyWrapper>
    </div>
  );
};

export default ChatBody;
