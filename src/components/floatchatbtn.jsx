import React, { useState } from "react";
import { X, MessageCircle, Send } from "lucide-react"; // Ensure lucide-react is installed

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]); // Stores chat history
  const [input, setInput] = useState("");

  // Function to handle sending message
  const sendMessage = () => {
    if (input.trim() === "") return; // Ignore empty messages

    const newMessage = { text: input, sender: "user" };
    const botResponse = { text: "Thanks for your query! We'll get back soon.", sender: "bot" };

    setMessages([...messages, newMessage, botResponse]);
    setInput(""); // Clear input field
  };

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "navy",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          zIndex: 1000,
        }}
      >
        {isOpen ? <X size={30} /> : <MessageCircle size={30} />}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            padding: "15px",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Chat Messages */}
          <div
            style={{
              maxHeight: "200px",
              overflowY: "auto",
              paddingBottom: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <p
                key={index}
                style={{
                  backgroundColor: msg.sender === "user" ? "lightblue" : "lightgray",
                  padding: "8px",
                  borderRadius: "8px",
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "5px 0",
                }}
              >
                {msg.text}
              </p>
            ))}
          </div>

          {/* Input Box */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress} // Handles Enter key press
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid lightgray",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                backgroundColor: "navy",
                color: "white",
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                marginLeft: "5px",
              }}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatButton;
