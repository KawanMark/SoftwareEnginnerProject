import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FiMessageSquare, 
  FiSettings, 
  FiUpload, 
  FiLogOut,
  FiCreditCard,
  FiShare2,
  FiShoppingCart
} from 'react-icons/fi';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
`;

const Logo = styled.div`
  padding: 0 1.5rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  margin: 0.25rem 0;
  cursor: pointer;
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.text};
  background-color: ${({ theme, active }) => active ? 'rgba(108, 99, 255, 0.1)' : 'transparent'};
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(108, 99, 255, 0.1);
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    margin-right: 0.75rem;
  }
`;

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <Logo>SyndraIA</Logo>
      <MenuItem active onClick={() => navigate('/dashboard')}>
        <FiMessageSquare /> Chatbot
      </MenuItem>
      <MenuItem onClick={() => navigate('/trained-chatbot')}>
        <FiMessageSquare /> Chatbot Treinado
      </MenuItem>
      <MenuItem onClick={() => navigate('/training')}>
        <FiUpload /> Treinamento
      </MenuItem>
      <MenuItem onClick={() => navigate('/payment')}>
        <FiCreditCard /> Pagamentos
      </MenuItem>
      <MenuItem onClick={() => navigate('/integrations')}>
        <FiSettings /> Integrações
      </MenuItem>
      
      <MenuItem 
        active={location.pathname === '/sharing'} 
        onClick={() => navigate('/sharing')}
          >
        <FiShare2 /> Compartilhar
      </MenuItem>

      <MenuItem 
        active={location.pathname === '/marketplace'} 
        onClick={() => navigate('/marketplace')}
        >
      <FiShoppingCart /> Marketplace

    </MenuItem>

      <MenuItem onClick={() => navigate('/login')}>
        <FiLogOut /> Sair
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;