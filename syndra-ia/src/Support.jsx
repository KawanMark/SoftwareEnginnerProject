import styled from 'styled-components';
import Sidebar from './components/Dashboard/Sidebar';
import HumanSupport from '../components/Support/HumanSupport';

const SupportPage = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem' }}>
        <HumanSupport />
      </div>
    </div>
  );
};

export default SupportPage;