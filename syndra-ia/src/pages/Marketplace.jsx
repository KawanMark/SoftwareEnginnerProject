import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/UI/Button';
import { FiShoppingCart, FiCheck, FiMail } from 'react-icons/fi';
import Sidebar from '../components/Dashboard/Sidebar'; // Importando o Sidebar
const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ChatbotCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Marketplace = () => {
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  // Removed unused state 'selectedChatbot'

  const chatbots = [
    {
      id: 1,
      name: "Chatbot de Vendas",
      description: "Ideal para e-commerces e atendimento inicial",
      price: 199.90,
      author: "SyndraIA Team"
    },
    {
      id: 2,
      name: "Chatbot Educacional",
      description: "Para instituições de ensino e cursos online",
      price: 299.90,
      author: "EducTech"
    }
  ];

  const handlePurchase = (chatbot) => {
    // Removed unused 'setSelectedChatbot' call
    // Simulação de processamento
    setTimeout(() => {
      setPurchaseSuccess(true);
    }, 1500);
  };

  return (
    <Container>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Marketplace de Chatbots</h1>
        
        {purchaseSuccess ? (
          <div style={{
            backgroundColor: '#f6ffed',
            border: '1px solid #b7eb8f',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <FiCheck style={{ fontSize: '3rem', color: '#52c41a', marginBottom: '1rem' }} />
            <h2>Pagamento realizado com sucesso!</h2>
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FiMail style={{ marginRight: '0.5rem' }} />
              E-mail enviado para sua conta com os detalhes de acesso.
            </p>
            <Button 
              style={{ marginTop: '1.5rem' }}
              onClick={() => {
                setPurchaseSuccess(false);
              }}
            >
              Voltar ao Marketplace
            </Button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {chatbots.map(chatbot => (
              <ChatbotCard key={chatbot.id}>
                <h3>{chatbot.name}</h3>
                <p style={{ color: '#666', margin: '0.5rem 0' }}>{chatbot.description}</p>
                <p style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                  R$ {chatbot.price.toFixed(2)}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#888' }}>Por: {chatbot.author}</p>
                <Button 
                  onClick={() => handlePurchase(chatbot)}
                  style={{ marginTop: '1rem', width: '100%' }}
                >
                  <FiShoppingCart style={{ marginRight: '0.5rem' }} />
                  Comprar Chatbot
                </Button>
              </ChatbotCard>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Marketplace;