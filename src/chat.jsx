import React, { useState } from 'react';
import bgImage from './assets/bg.jpg'; // Adjust the path as needed

const CommunityChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw', // This will ensure it takes the full viewport width
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      overflow: 'hidden', // Ensure no overflow causing whitespace
      boxSizing: 'border-box',
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 50, 0.8)',
        padding: '20px',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '600px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        boxSizing: 'border-box',
      }}>
        {/* Messages Box */}
        <div style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px',
          borderRadius: '8px',
          height: '300px',
          overflowY: 'auto',
          marginBottom: '10px',
        }}>
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} style={{
                marginBottom: '10px',
                padding: '8px',
                backgroundColor: '#f1f1f1',
                borderRadius: '8px',
              }}>
                {msg}
              </div>
            ))
          ) : (
            <p>No messages yet. Start the conversation!</p>
          )}
        </div>

        {/* Input Bar */}
        <div style={{
          display: 'flex',
          gap: '10px',
        }}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
          <button
            onClick={handleSendMessage}
            style={{
              backgroundColor: 'white',
              color: 'navy',
              padding: '10px 15px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityChatPage;
