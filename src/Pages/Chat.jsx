import React, { useState, useEffect, useRef } from "react";
// import { db, auth } from "../firebase-config";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import './Style.scss';

const Chat = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const messagesRef = collection(db, "messages");


  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt", 'asc')
    );

    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsuscribe();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL,
      room,
    });

    setNewMessage("");
  };
  var photoURL = auth.currentUser.photoURL;

  const scrollRef = useRef();
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth"
    });
  }, [scrollRef]);

  return (
    <div className="chat-parent">
      <div className="chat">
        <div className="header-parent">
          <div className="header">
            <h1 className="title">Welcome to: {room.toUpperCase()}</h1>
          </div>
        </div>
        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className="message-owner" ref={scrollRef}>
              <div className="img">
                <img src={message.photoURL ? message.photoURL : photoURL} alt="" />
              </div>
              <div className="user-direction">
                <span className="user-name">{message.user}:</span>
                <span className="user">{message.text}</span>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="new-message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            className="new-message-input"
            placeholder="Type your message here..."
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div >
    </div >
  );
};

export default Chat;