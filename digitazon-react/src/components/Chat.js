import { useState, useEffect } from "react";

function Chat() {
  return (
    <div class="BoxChat">
      <header>
        <img
          class="logo"
          alt="logo"
          src="https://icons.veryicon.com/png/o/cartoon/cartoon-exaggeration/laugh-awkward.png"
        ></img>
        <h2>Chattt</h2>
      </header>
      <ul>
        <li>
          <span>♥:</span>Messaggio Prova
        </li>
      </ul>
    </div>
  );
}

function SendMsg() {
  let [userName, setUserName] = useState("");
  let [message, setMessage] = useState("");

  return (
    <div class="BoxSendMsg">
      <input placeholder="Insert your user name" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
      <input placeholder="Write a message" value={message} onChange={(e) => setMessage(e.target.value)}></input>
      <button>Send</button>
    </div>
  );
}

export function MyChat() {
  return (
    <div>
      <Chat />
      <SendMsg />
    </div>
  );
}
