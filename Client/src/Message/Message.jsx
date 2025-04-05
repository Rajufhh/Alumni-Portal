import React, { useState } from "react";
import { IoIosAttach } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import "./Message.css";

const messages = [
  {
    id: 1,
    name: "Megh Gaidhani",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "Max Payne",
    time: "11:37 AM",
  },
  {
    id: 2,
    name: "Shah Rukh Khan",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "can i cast you in my next movie?",
    time: "10:12 AM",
  },
  {
    id: 3,
    name: "Aman Mehta",
    avatar: "https://i.pravatar.cc/150?img=8",
    lastMessage: "Are you joining the event?",
    time: "Yesterday",
  },
  {
    id: 4,
    name: "Justin Birbal",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "I like Arijit Singh",
    time: "11:37 AM",
  },
  {
    id: 5,
    name: "Pranali Habib",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "I am a Frontend Developer lol",
    time: "10:12 AM",
  },
  {
    id: 6,
    name: "Jesse Pinkman",
    avatar: "https://i.pravatar.cc/150?img=8",
    lastMessage: "Dont let Walter know about it",
    time: "Yesterday",
  },
  {
    id: 7,
    name: "Salman Khan",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "Ye macchar namaste kr rha",
    time: "11:37 AM",
  },
  {
    id: 8,
    name: "Xi Jin Ping",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "India is better than China",
    time: "10:12 AM",
  },
  {
    id: 9,
    name: "Walter White",
    avatar: "https://i.pravatar.cc/150?img=8",
    lastMessage: "Yar Jesse BKL ab ye gaya mc ",
    time: "Yesterday",
  },
];

function Message() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const updated = [...chatMessages, { sender: "you", text: newMessage }];
    setChatMessages(updated);
    setNewMessage("");
  };

  const handleSelectChat = (msg) => {
    setSelectedChat(msg);
    setChatMessages([
      { sender: "you", text: `Hi ${msg.name}!` },
      { sender: "them", text: "Hello Pranali 😄" },
      { sender: "you", text: "How are you?" },
      { sender: "them", text: "Doing great! What about you?" },
    ]);
  };

  return (
    <div className="message-wrapper">
      <div className="inbox-container">
        <h2 className="inbox-header">Inbox</h2>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`inbox-item ${selectedChat?.id === msg.id ? "active" : ""}`}
            onClick={() => handleSelectChat(msg)}
          >
            <img src={msg.avatar} alt={msg.name} className="avatar" />
            <div className="message-info">
              <div className="sender-name">{msg.name}</div>
              <div className="last-message">{msg.lastMessage}</div>
            </div>
            <div className="message-time">{msg.time}</div>
          </div>
        ))}
      </div>

      <div className="chat-container">
        {selectedChat ? (
          <div className="chat-window">
            <div className="chat-header">
              <h3>{selectedChat.name}</h3>
            </div>

            <div className="chat-messages">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`message-bubble ${msg.sender === "you" ? "sender" : "receiver"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <div className="left-icons">
                <button className="icon-button"><BsEmojiSmile /></button>
              </div>

              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />

              <div className="right-icons">
                <button className="icon-button"><IoIosAttach /></button>
                <button className="send-button" onClick={handleSend}><IoIosSend /></button>
              </div>
            </div>
          </div>
        ) : (
          <div className="chat-placeholder">Send a message to start chat</div>
        )}
      </div>
    </div>
  );
}

export default Message;