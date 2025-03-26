import styled from 'styled-components';
import { Button } from '../UI/Button';
import { FiCreditCard, FiZap, FiDatabase } from 'react-icons/fi';

const PlanContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
`;

const PlanHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  margin: 1rem 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    svg {
      margin-right: 0.5rem;
      color: #6C63FF;
    }
  }
`;

const PlanInfo = ({ currentPlan = 'free' }) => {
  const plans = {
    free: {
      name: 'Grátis',
      features: [
        '1 chatbot ativo',
        '100 mensagens/mês',
        'Suporte básico'
      ],
      upgradeTo: 'pro'
    },
    pro: {
      name: 'Profissional',
      features: [
        '3 chatbots ativos',
        'Mensagens ilimitadas',
        'Treinamento personalizado',
        'Suporte prioritário'
      ],
      upgradeTo: 'enterprise'
    },
    enterprise: {
      name: 'Empresarial',
      features: [
        'Chatbots ilimitados',
        'Integrações avançadas',
        'Treinamento dedicado',
        'Suporte 24/7'
      ],
      upgradeTo: null
    }
  };

  return (
    <PlanContainer>
      <PlanHeader>
        <h4>Seu Plano: {plans[currentPlan].name}</h4>
        {plans[currentPlan].upgradeTo && (
          <Button small>Upgrade</Button>
        )}
      </PlanHeader>

      <PlanFeatures>
        {plans[currentPlan].features.map((feature, index) => (
          <li key={index}>
            <FiZap size={16} />
            {feature}
          </li>
        ))}
      </PlanFeatures>

      <Button variant="outline" fullWidth icon={<FiCreditCard />}>
        Gerenciar pagamento
      </Button>
    </PlanContainer>
  );
};

export default PlanInfo;