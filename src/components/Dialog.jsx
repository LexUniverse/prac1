import React, { useState } from 'react';

function Dialog(props) {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([
    "Привет, как дела?",
  ]);

  const handleMessageChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (messageText.trim() !== '') {
      setMessages([...messages, messageText]);
      setMessageText('');
    }
  };

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          value={messageText}
          onChange={handleMessageChange}
          placeholder="Введите сообщение"
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default Dialog;
