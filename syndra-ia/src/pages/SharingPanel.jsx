import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { FiShare2, FiUserPlus, FiLink, FiLock, FiDollarSign, 
  FiSettings, FiCopy, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const PanelContainer = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Panel = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const PanelTitle = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.25rem;

  svg {
    margin-right: 0.5rem;
    color: #6C63FF;
  }
`;

const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const SharingPanel = () => {
  // Estado para compartilhamento
  const [email, setEmail] = useState('');
  const [sharedUsers, setSharedUsers] = useState([
    { id: 1, email: 'marketing@empresa.com', access: 'edit', status: 'active' },
    { id: 2, email: 'suporte@cliente.com', access: 'view', status: 'pending' }
  ]);

  // Estado para venda
  const [isForSale, setIsForSale] = useState(false);
  const [price, setPrice] = useState(0);
  const [saleLink, setSaleLink] = useState('https://syndraia.com/chatbot/xyz-123');

  // Adicionar usuário para compartilhar
  const handleShare = () => {
    if (!email) return;
    const newUser = {
      id: Date.now(),
      email,
      access: 'view',
      status: 'pending'
    };
    setSharedUsers([...sharedUsers, newUser]);
    setEmail('');
  };

  // Copiar link de venda
  const copySaleLink = () => {
    navigator.clipboard.writeText(saleLink);
    alert('Link de venda copiado!');
  };

  return (
    <Container>
      <Sidebar />
      <PanelContainer>
        {/* Painel de Compartilhamento */}
        <Panel>
          <PanelTitle>
            <FiShare2 /> Compartilhar Chatbot
          </PanelTitle>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Input
              type="email"
              placeholder="Email do cliente/grupo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ flex: 1 }}
            />
            <Button onClick={handleShare}>
              <FiUserPlus /> Adicionar
            </Button>
          </div>

          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Clientes/Grupos com Acesso:</h4>
            {sharedUsers.map(user => (
              <UserItem key={user.id}>
                <div>
                  <div>{user.email}</div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>
                    {user.access === 'edit' ? 'Pode editar' : 'Apenas visualizar'} • 
                    <span style={{ 
                      color: user.status === 'active' ? 'green' : 'orange',
                      marginLeft: '0.5rem'
                    }}>
                      {user.status === 'active' ? 'Ativo' : 'Pendente'}
                    </span>
                  </div>
                </div>
                <div>
                  <Button 
                    variant="text" 
                    size="small"
                    onClick={() => {
                      setSharedUsers(sharedUsers.filter(u => u.id !== user.id));
                    }}
                  >
                    <FiTrash2 />
                  </Button>
                </div>
              </UserItem>
            ))}
          </div>
        </Panel>

        {/* Painel de Venda */}
        <Panel>
          <PanelTitle>
            <FiDollarSign /> Vender Chatbot
          </PanelTitle>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <input
              type="checkbox"
              id="forSale"
              checked={isForSale}
              onChange={() => setIsForSale(!isForSale)}
              style={{ marginRight: '0.5rem' }}
            />
            <label htmlFor="forSale" style={{ fontWeight: 500 }}>
              Oferecer este chatbot para venda
            </label>
          </div>

          {isForSale && (
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem' }}>Preço (R$)</label>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  min="0"
                  step="0.01"
                  placeholder="Ex: 99.90"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem' }}>Link de Venda</label>
                <div style={{ display: 'flex' }}>
                  <Input
                    value={saleLink}
                    readOnly
                    style={{ flex: 1 }}
                  />
                  <Button 
                    variant="outline" 
                    onClick={copySaleLink}
                    style={{ marginLeft: '0.5rem' }}
                  >
                    <FiCopy />
                  </Button>
                </div>
              </div>

              <Button 
                style={{ marginTop: '0.5rem' }}
                onClick={() => alert('Configurações de venda salvas!')}
              >
                Ativar Venda
              </Button>
            </div>
          )}
        </Panel>
      </PanelContainer>
    </Container>
  );
};

export default SharingPanel;