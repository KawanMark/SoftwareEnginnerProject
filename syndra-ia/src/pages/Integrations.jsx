import styled from 'styled-components';
import Sidebar from '../components/Dashboard/Sidebar';
import IntegrationCard from '../components/Integrations/IntegrationCard';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const IntegrationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const Integrations = () => {
  const integrations = [
    { name: 'WhatsApp', icon: 'whatsapp', connected: true },
    { name: 'Telegram', icon: 'telegram', connected: false },
    { name: 'Moodle', icon: 'moodle', connected: false },
    { name: 'Slack', icon: 'slack', connected: false },
    { name: 'Website', icon: 'globe', connected: false },
    { name: 'API', icon: 'code', connected: false },
  ];

  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <h1>Integrações</h1>
        <p>Conecte seu chatbot às plataformas que você utiliza</p>
        
        <IntegrationsGrid>
          {integrations.map((integration, index) => (
            <IntegrationCard key={index} integration={integration} />
          ))}
        </IntegrationsGrid>
      </MainContent>
    </DashboardContainer>
  );
};

export default Integrations;