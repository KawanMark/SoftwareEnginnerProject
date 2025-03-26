import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiSend, FiBookOpen } from 'react-icons/fi';
import Sidebar from '../components/Dashboard/Sidebar';
const ChatbotContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);
`;

const KnowledgeBase = styled.div`
  width: 300px;
  border-right: 1px solid #eee;
  padding: 1rem;
  overflow-y: auto;
`;

const ChatArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const TrainedChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [knowledge, setKnowledge] = useState([
    'Como configurar meu chatbot?',
    'Quais arquivos posso enviar?',
    'Limites de mensagens'
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulação de resposta do chatbot treinado
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: `Resposta baseada no seu conhecimento: ${input}`,
        sender: 'bot'
      }]);
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <ChatbotContainer>
        <KnowledgeBase>
          <h3><FiBookOpen /> Base de Conhecimento</h3>
          <ul>
            {knowledge.map((item, i) => (
              <li key={i} style={{ margin: '0.5rem 0', cursor: 'pointer' }}
                onClick={() => setInput(item)}>
                {item}
              </li>
            ))}
          </ul>
        </KnowledgeBase>
        
        <ChatArea>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                margin: '0.5rem',
                padding: '0.5rem 1rem',
                background: msg.sender === 'user' ? '#6C63FF' : '#f0f0f0',
                color: msg.sender === 'user' ? 'white' : 'black',
                borderRadius: '8px',
                display: 'inline-block',
                maxWidth: '70%'
              }}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              style={{ flex: 1, padding: '0.75rem' }}
              placeholder="Pergunte ao seu chatbot..."
            />
            <button onClick={sendMessage} style={{ padding: '0 1.5rem' }}>
              <FiSend />
            </button>
          </div>
        </ChatArea>
      </ChatbotContainer>
    </div>
  );
};

export default TrainedChatbot;