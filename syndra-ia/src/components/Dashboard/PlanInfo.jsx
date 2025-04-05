import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../UI/Button';
import { FiCreditCard, FiAlertTriangle, FiCheck, FiZap } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

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

const CancellationMessage = styled.div`
  background-color: #fffbe6;
  border: 1px solid #ffe58f;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    color: #faad14;
  }
`;

const SuccessMessage = styled.div`
  background-color: #f6ffed;
  border: 1px solid #b7eb8f;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    color: #52c41a;
  }
`;

const PlanInfo = ({ currentPlan = 'free' }) => {
  const navigate = useNavigate();
  const [showCancellation, setShowCancellation] = useState(false);
  const [cancellationSuccess, setCancellationSuccess] = useState(false);

  const plans = {
    free: {
      name: 'Grátis',
      features: [
        '1 chatbot ativo',
        '100 mensagens/mês',
        'Suporte básico'
      ],
      upgradeTo: 'pro',
      isPaid: false
    },
    pro: {
      name: 'Profissional',
      features: [
        '3 chatbots ativos',
        'Mensagens ilimitadas',
        'Treinamento personalizado',
        'Suporte prioritário'
      ],
      upgradeTo: 'enterprise',
      isPaid: true
    },
    enterprise: {
      name: 'Empresarial',
      features: [
        'Chatbots ilimitados',
        'Integrações avançadas',
        'Treinamento dedicado',
        'Suporte 24/7'
      ],
      upgradeTo: null,
      isPaid: true
    }
  };

  const handleUpgrade = () => {
    navigate(`/payment?action=upgrade&plan=${plans[currentPlan].upgradeTo}`);
  };

  const handleManagePayment = () => {
    navigate('/payment');
  };

  const handleCancelSubscription = () => {
    setShowCancellation(false);
    
    // Simula diferentes comportamentos para planos pagos e gratuitos
    if (plans[currentPlan].isPaid) {
      console.log('Enviando e-mail de cancelamento para plano pago...');
      console.log(`- Plano atual: ${plans[currentPlan].name}`);
      console.log('- Acesso mantido até o final do período atual');
    } else {
      console.log('Usuário com plano gratuito solicitou cancelamento');
      console.log('Nenhuma cobrança será realizada');
    }
    
    setTimeout(() => {
      setCancellationSuccess(true);
    }, 1000);
  };

  const getCancellationMessage = () => {
    if (plans[currentPlan].isPaid) {
      return 'Seu acesso será mantido até o final do período atual.';
    }
    return 'Sua conta continuará ativa com os recursos do plano gratuito.';
  };

  const getSuccessMessage = () => {
    if (plans[currentPlan].isPaid) {
      return 'Enviamos um e-mail com os detalhes do cancelamento. Seu acesso será mantido até o final do período atual.';
    }
    return 'Sua assinatura foi removida. Sua conta continuará ativa com os recursos do plano gratuito.';
  };

  return (
    <PlanContainer>
      <PlanHeader>
        <div>
          <h4>Seu Plano Atual</h4>
          <p style={{ color: '#6C63FF', fontWeight: 'bold' }}>{plans[currentPlan].name}</p>
        </div>
        {plans[currentPlan].upgradeTo && (
          <Button 
            size="small" 
            onClick={handleUpgrade}
          >
            Upgrade
          </Button>
        )}
      </PlanHeader>

      <PlanFeatures>
        {plans[currentPlan].features.map((feature, index) => (
          <li key={index}>
            <FiCheck />
            {feature}
          </li>
        ))}
      </PlanFeatures>

      <Button 
        fullWidth 
        icon={<FiCreditCard />}
        onClick={handleManagePayment}
        style={{ marginBottom: '0.5rem' }}
      >
        Gerenciar pagamento
      </Button>

      {/* Botão de cancelamento - SEMPRE VISÍVEL */}
      {!showCancellation && !cancellationSuccess && (
        <Button 
          variant="outline" 
          fullWidth 
          onClick={() => setShowCancellation(true)}
        >
          Cancelar assinatura
        </Button>
      )}

      {showCancellation && (
        <div style={{ marginTop: '1rem' }}>
          <CancellationMessage>
            <FiAlertTriangle size={20} />
            <div>
              <p style={{ fontWeight: 'bold' }}>Tem certeza que deseja cancelar?</p>
              <p style={{ fontSize: '0.9rem' }}>{getCancellationMessage()}</p>
            </div>
          </CancellationMessage>

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <Button 
              variant="danger"
              onClick={handleCancelSubscription}
            >
              Confirmar Cancelamento
            </Button>
            <Button 
              variant="outline"
              onClick={() => setShowCancellation(false)}
            >
              Manter Assinatura
            </Button>
          </div>
        </div>
      )}

      {cancellationSuccess && (
        <SuccessMessage>
          <FiCheck size={20} />
          <div>
            <p style={{ fontWeight: 'bold' }}>
              {plans[currentPlan].isPaid 
                ? 'Assinatura cancelada com sucesso!' 
                : 'Assinatura removida com sucesso!'}
            </p>
            <p style={{ fontSize: '0.9rem' }}>{getSuccessMessage()}</p>
          </div>
        </SuccessMessage>
      )}
    </PlanContainer>
  );
};

export default PlanInfo;