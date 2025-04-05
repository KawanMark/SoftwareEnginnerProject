import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/UI/Button';
import { FiCreditCard, FiCheck, FiMail } from 'react-icons/fi';
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
    const navigate = useNavigate();
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('pro');
    const [cardData, setCardData] = useState({
      number: '•••• •••• •••• 4242',
      name: 'Nome no Cartão',
      expiry: '12/25',
      cvc: '•••'
    });
  
    const handlePayment = () => {
      // Simulando processamento
      setTimeout(() => {
        setPaymentSuccess(true);
      }, 1500);
    };
  
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
        {paymentSuccess ? (
          <div style={{ 
            backgroundColor: '#f6ffed',
            border: '1px solid #b7eb8f',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <FiCheck style={{ fontSize: '3rem', color: '#52c41a', marginBottom: '1rem' }} />
            <h2>Pagamento realizado com sucesso!</h2>
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FiMail style={{ marginRight: '0.5rem' }} />
              E-mail enviado para sua conta com os detalhes.
            </p>
            <Button 
              onClick={() => navigate('/dashboard')}
              style={{ marginTop: '1.5rem' }}
            >
              Voltar ao Dashboard
            </Button>
          </div>
        ) : (
          <>
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
                onChange={(e) => setCardData({...cardData, cdc: e.target.value})}
              />
            </div>

            <Button 
              fullWidth 
              onClick={handlePayment}
              style={{ marginTop: '2rem' }}
            >
              <FiCreditCard style={{ marginRight: '0.5rem' }} />
              Confirmar Pagamento
            </Button>
          </>
        )}
      </PaymentForm>
    </PaymentContainer>
  );
};

export default Payment;