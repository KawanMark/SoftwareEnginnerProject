import styled from 'styled-components';
import Sidebar from '../../components/Dashboard/Sidebar';
import ChatPanel from '../../components/Chatbot/ChatPanel';
import PlanInfo from '../../components/Dashboard/PlanInfo';

// Adicione estas definições de estilo:
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ChatArea = styled.div`
  flex: 1;
  margin-right: 2rem;
`;

const SidebarArea = styled.aside`
  width: 300px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      
      <MainContent>
        <ChatArea>
          <ChatPanel />
        </ChatArea>
        
        <SidebarArea>
          <PlanInfo currentPlan="free" />
        </SidebarArea>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;