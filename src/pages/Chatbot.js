import React, { useState } from 'react';
import '../css/chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
            <div className="chatbot-header" onClick={toggleChat}>
                <span>Chat with us!</span>
            </div>
            {isOpen && (
                <div className="chatbot-content">
                    <div className="chatbot-messages">
                        <div className="message bot-message">Hello! How can I assist you today?</div>
                    </div>
                    <input type="text" placeholder="Type a message..." className="chatbot-input" />
                </div>
            )}
        </div>
    );
};

export default Chatbot;
