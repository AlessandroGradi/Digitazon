import React, { useState } from 'react';

export default function Api() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const handleSendMessage = async () => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    setReply(data.reply);
  };

  return (
    <div>
      <h1>ChatGPT API</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div>
        <p>Reply: {reply}</p>
      </div>
    </div>
  );
}