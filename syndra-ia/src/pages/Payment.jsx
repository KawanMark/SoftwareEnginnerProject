import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/UI/Button';
import { FiCreditCard, FiCheck } from 'react-icons/fi';
import Sidebar from '../components/Dashboard/Sidebar';

const PaymentContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const PaymentForm = styled.div`
  flex: 1;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const PlanCard = styled.div`
  border: 1px solid ${({ theme, selected }) => 
    selected ? theme.colors.primary : '#eee'};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  background-color: ${({ selected }) => selected ? 'rgba(108, 99, 255, 0.05)' : 'white'};
`;

const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: ''
  });

  const plans = {
    free: {
      name: 'Grátis',
      price: 'R$ 0/mês',
      features: ['1 chatbot', '100 mensagens/mês']
    },
    pro: {
      name: 'Profissional',
      price: 'R$ 99/mês',
      features: ['3 chatbots', 'Mensagens ilimitadas']
    },
    enterprise: {
      name: 'Empresarial',
      price: 'R$ 299/mês',
      features: ['Chatbots ilimitados', 'Suporte prioritário']
    }
  };

  return (
    <PaymentContainer>
      <Sidebar />
      <PaymentForm>
        <h2>Escolha seu Plano</h2>
        
        {Object.entries(plans).map(([key, plan]) => (
          <PlanCard 
            key={key}
            selected={selectedPlan === key}
            onClick={() => setSelectedPlan(key)}
          >
            <h3>{plan.name} - {plan.price}</h3>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {selectedPlan === key && <FiCheck color="#6C63FF" />}
          </PlanCard>
        ))}

        <h3 style={{ marginTop: '2rem' }}>Dados do Cartão</h3>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
          <input
            type="text"
            placeholder="Número do cartão"
            value={cardData.number}
            onChange={(e) => setCardData({...cardData, number: e.target.value})}
          />
          <input
            type="text"
            placeholder="Nome no cartão"
            value={cardData.name}
            onChange={(e) => setCardData({...cardData, name: e.target.value})}
          />
          <input
            type="text"
            placeholder="Validade (MM/AA)"
            value={cardData.expiry}
            onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
          />
          <input
            type="text"
            placeholder="CVC"
            value={cardData.cvc}
            onChange={(e) => setCardData({...cardData, cvc: e.target.value})}
          />
        </div>

        <Button 
          fullWidth 
          icon={<FiCreditCard />}
          style={{ marginTop: '2rem' }}
          onClick={() => alert('Pagamento processado!')}
        >
          Confirmar Pagamento
        </Button>
      </PaymentForm>
    </PaymentContainer>
  );
};

export default Payment;