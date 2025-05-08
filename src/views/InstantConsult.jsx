import React, { useState } from "react";
import styles from "./InstantConsult.module.css"; // Import CSS Module for styling

const InstantConsult = () => {
  const [messages, setMessages] = useState([]); // Initial empty chat history
  const [message, setMessage] = useState(""); // Input field for the user message

  const handleSendMessage = async () => {
    if (!message.trim()) return; // Don't send if input is empty

    // Add user's message to chat history
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", message },
    ]);
    setMessage(""); // Clear the input field

    // Simulate AI response (replace with actual API call for real AI)
    const aiResponse = await getAIResponse(message);

    // Add AI's response to chat history
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "ai", message: aiResponse },
    ]);
  };

  // Simulating AI response (replace with actual API call)
  const getAIResponse = (userMessage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is the AI's response to: " + userMessage); // Simulated response
      }, 1000); // Simulate AI response delay
    });
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h2>Instant Consult</h2>
      </div>
      <div className={styles.chatWindow}>
        {messages.length === 0 && (
          <p className={styles.initialPrompt}>
            Ask a question to get started...
          </p>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "user" ? styles.userMessage : styles.aiMessage
            }
          >
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
      <div className={styles.chatInputArea}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className={styles.chatInput}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default InstantConsult;
