import React, { useState } from 'react';
import './dialogspage.css';
import DialogsList from '../components/dialoglist';
import { useParams, Link } from 'react-router-dom';

const chatlist = [
  { id: 1, name: 'Роман Диффи' },
  { id: 2, name: 'Никита' },
  { id: 3, name: 'Дима' },
  { id: 4, name: 'Решка' },
];

function Dialogspage(props) {
  const { dialogId } = useParams();
  const selectedDialog = chatlist.find((dialog) => dialog.id === parseInt(dialogId));
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState(["Начните диалог!"]);

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
      <div className='bodypage'>
        <div className='dialogspage'>
          <div className='dialogsList'>
            {chatlist.map((dialog) => (
              <div className='dialog' key={dialog.id}>
                <a href={`/dialogs/${dialog.id}`}>
                   <DialogsList name={dialog.name}></DialogsList>
                 </a>
              </div>
            ))}
          </div>
          <div className='messages'>
            <p>{dialogId == 0 && <div className='activename'>Выберите диалог</div>}</p>
            <p>{selectedDialog && <div className='activename'>{selectedDialog.name}</div>}</p>
            {dialogId !== '0' && (
              <div className="message">
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
            )}
            <div className="message"></div>
            <div className="message"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogspage;
