import styled from 'styled-components';
import { Button } from '../UI/Button';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Status = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  background-color: ${({ theme, connected }) => 
    connected ? 'rgba(40, 167, 69, 0.2)' : 'rgba(108, 117, 125, 0.2)'};
  color: ${({ theme, connected }) => 
    connected ? theme.colors.success : theme.colors.lightText};
`;

const IntegrationCard = ({ integration }) => {
  return (
    <Card>
      <Icon>{integration.icon}</Icon>
      <h3>{integration.name}</h3>
      <Status connected={integration.connected}>
        {integration.connected ? 'Conectado' : 'Não conectado'}
      </Status>
      <Button variant={integration.connected ? 'secondary' : 'primary'}>
        {integration.connected ? 'Gerenciar' : 'Conectar'}
      </Button>
    </Card>
  );
};

export default IntegrationCard;