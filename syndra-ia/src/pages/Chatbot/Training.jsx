import styled from 'styled-components';
import Sidebar from '../../components/Dashboard/Sidebar';
import TrainingPanel from '../../components/Chatbot/TrainingPanel';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Training = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <TrainingPanel />
      </MainContent>
    </DashboardContainer>
  );
};

export default Training;