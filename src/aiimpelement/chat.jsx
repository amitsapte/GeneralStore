import React, { useState } from 'react';
import chat from '../image/chat.jpeg'

const ChatBot = () => {
  // State to manage chat window visibility and messages
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Function to toggle chat window visibility
  const toggleChatWindow = () => {
    setIsChatVisible((prev) => !prev);
  };

  // Function to handle user input and send message
  const handleSendMessage = (event) => {
    if (event.key === 'Enter' && userInput.trim()) {
      // User message
      const newUserMessage = { text: userInput, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);

      // Get chatbot response (mocked here)
      const botResponse = getChatbotResponse(userInput);
      const newBotMessage = { text: botResponse, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);

      // Clear input field
      setUserInput('');
    }
  };

  // Function to generate a simple chatbot response
  const getChatbotResponse = (message) => {
    if (message.toLowerCase().includes('assignment')) {
      return 'You can find your assignments on the Assignments page.';
    } else if (message.toLowerCase().includes('admin')) {
      return 'Please contact the admin at admin@example.com.';
    } else {
      return "I'm sorry, I didn't understand that.";
    }
  };

  return (
    <div>
      {/* Floating Chat Icon */}
      <div
        onClick={toggleChatWindow}
        className="fixed bottom-6 right-6 cursor-pointer  p-3  rounded-full shadow-lg"
      >
        <img src={chat} alt="Chat Icon" className="w-10 h-10 bg-transparent" />
      </div>

      {/* Chat Window */}
      {isChatVisible && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <span className="text-lg font-semibold">Chat with Support</span>
            <button
              onClick={toggleChatWindow}
              className="text-red-500"
            >
              X
            </button>
          </div>
          <div className="overflow-y-auto flex-1 space-y-3 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`text-sm p-2 rounded-md ${
                  message.sender === 'user'
                    ? 'bg-gray-200 text-left'
                    : 'bg-blue-100 text-right'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleSendMessage}
            placeholder="Type your message..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
