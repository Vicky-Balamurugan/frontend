import React, { useState } from 'react';

const ChatAndConversation = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    onSendMessage(message);
    setChatHistory([...chatHistory, { user: 'You', message }]);
    setMessage('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-semibold mb-4">Chat & Conversation</h2>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="flex flex-col space-y-2">
          {chatHistory.map((chat, index) => (
            <div key={index} className="flex justify-between">
              <span className="font-semibold">{chat.user}:</span>
              <span>{chat.message}</span>
            </div>
          ))}
        </div>
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
        placeholder="Type your message..."
      />
      <button
        onClick={handleSend}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default ChatAndConversation;
