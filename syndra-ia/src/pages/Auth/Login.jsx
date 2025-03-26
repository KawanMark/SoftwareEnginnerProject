import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components/UI/Button';
import { Input } from '../../components/UI/Input';
import { FiLock, FiMail, FiUser, FiCreditCard } from 'react-icons/fi';

const AuthContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const LeftPanel = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #6C63FF 0%, #4A40BF 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: white;
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const AuthForm = styled.div`
  width: 100%;
  max-width: 400px;
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  border-bottom: 3px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  font-weight: ${({ active }) => active ? '600' : '400'};
`;

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    plan: 'free'
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de login/cadastro bem-sucedido
    navigate('/dashboard');
  };

  return (
    <AuthContainer>
      <LeftPanel>
        <h1>SyndraIA</h1>
        <p>Soluções personalizadas em chatbots inteligentes</p>
        <ul style={{ marginTop: '2rem' }}>
          <li>✔ Suporte humano integrado</li>
          <li>✔ Planos flexíveis</li>
          <li>✔ Treinamento personalizado</li>
        </ul>
      </LeftPanel>

      <RightPanel>
        <AuthForm>
          <TabContainer>
            <Tab active={activeTab === 'login'} onClick={() => setActiveTab('login')}>
              Login
            </Tab>
            <Tab active={activeTab === 'register'} onClick={() => setActiveTab('register')}>
              Cadastro
            </Tab>
          </TabContainer>

          <form onSubmit={handleSubmit}>
            {activeTab === 'register' && (
              <div style={{ marginBottom: '1rem' }}>
                <Input
                  placeholder="Nome completo"
                  leftIcon={<FiUser />}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            )}

            <div style={{ marginBottom: '1rem' }}>
              <Input
                type="email"
                placeholder="Email"
                leftIcon={<FiMail />}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<FiLock />}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            {activeTab === 'register' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label>Plano:</label>
                <select 
                  style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}
                  value={formData.plan}
                  onChange={(e) => setFormData({...formData, plan: e.target.value})}
                >
                  <option value="free">Grátis (limitado)</option>
                  <option value="pro">Profissional (R$99/mês)</option>
                  <option value="enterprise">Empresarial (R$299/mês)</option>
                </select>
              </div>
            )}

            <Button type="submit" fullWidth>
              {activeTab === 'login' ? 'Entrar' : 'Criar conta'}
            </Button>

            {activeTab === 'login' && (
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <Link to="/support" style={{ color: '#6C63FF' }}>
                  Precisa de ajuda? Fale com nosso suporte
                </Link>
              </div>
            )}
          </form>
        </AuthForm>
      </RightPanel>
    </AuthContainer>
  );
};

export default Login;