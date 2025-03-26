import React from 'react';
import styled from 'styled-components';
import { FiSend } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Button } from '../UI/Button';
import { useState } from 'react';
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
`;

const Message = styled.div`
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  max-width: 70%;
  background-color: ${({ theme, isUser }) => 
    isUser ? theme.colors.primary : '#f1f1f1'};
  color: ${({ theme, isUser }) => 
    isUser ? theme.colors.white : theme.colors.text};
  align-self: ${({ isUser }) => isUser ? 'flex-end' : 'flex-start'};
`;

const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ced4da;
  border-radius: 8px;
  font-size: 1rem;
`;

const SendButton = styled(Button)`
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SupportButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const ChatPanel = () => {
  const [messages, setMessages] = useState([
    { text: 'Olá! Sou o chatbot da SyndraIA. Como posso te ajudar hoje?', isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    setMessages([...messages, { text: inputValue, isUser: true }]);
    setInputValue('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { text: 'Estou processando sua pergunta...', isUser: false }
      ]);
    }, 1000);
  };

  return (
    <>
      <ChatContainer>
        <MessagesContainer>
          {messages.map((message, index) => (
            <Message key={index} isUser={message.isUser}>
              {message.text}
            </Message>
          ))}
        </MessagesContainer>

        <InputContainer>
          <ChatInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite sua mensagem..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <SendButton onClick={handleSendMessage}>
            <FiSend />
          </SendButton>
        </InputContainer>
      </ChatContainer>

      <SupportButtonContainer>
        <Button 
          variant="outline" 
          onClick={() => navigate('/support')}
        >
          Falar com atendente humano
        </Button>
      </SupportButtonContainer>
    </>
  );
};

export default ChatPanel;