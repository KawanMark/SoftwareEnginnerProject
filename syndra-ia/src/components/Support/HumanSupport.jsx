import styled from 'styled-components';
import { Button } from '../UI/Button';
import { FiMessageSquare, FiMail, FiPhone } from 'react-icons/fi';

const SupportContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const SupportOption = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #eee;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #6C63FF;
    background-color: rgba(108, 99, 255, 0.05);
  }

  svg {
    margin-right: 1rem;
    color: #6C63FF;
  }
`;

const HumanSupport = () => {
  return (
    <SupportContainer>
      <h3>Não encontrou o que precisava?</h3>
      <p>Converse com nosso time de suporte:</p>
      
      <SupportOption onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
        <FiMessageSquare size={24} />
        <div>
          <strong>Chat Online</strong>
          <p>Atendimento instantâneo via WhatsApp</p>
        </div>
      </SupportOption>

      <SupportOption onClick={() => window.location.href = 'mailto:suporte@syndraia.com'}>
        <FiMail size={24} />
        <div>
          <strong>Email</strong>
          <p>suporte@syndraia.com</p>
        </div>
      </SupportOption>

      <SupportOption onClick={() => window.location.href = 'tel:+5511999999999'}>
        <FiPhone size={24} />
        <div>
          <strong>Telefone</strong>
          <p>(11) 99999-9999</p>
        </div>
      </SupportOption>

      <Button variant="outline" style={{ marginTop: '1rem' }} onClick={() => window.history.back()}>
        Voltar ao chatbot
      </Button>
    </SupportContainer>
  );
};

export default HumanSupport;