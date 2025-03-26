import styled from 'styled-components';
import { Button } from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeroSection>
        <HeroTitle>Bem-vindo à SyndraIA</HeroTitle>
        <HeroSubtitle>
          Transformando a realidade com chatbots personalizados que atendem às suas necessidades específicas.
        </HeroSubtitle>
        <Button onClick={() => navigate('/login')}>Comece Agora</Button>
      </HeroSection>

      <FeaturesSection>
        <h2>Nossas Soluções</h2>
        <FeaturesGrid>
          <FeatureCard>
            <h3>Para Professores</h3>
            <p>
              Assistentes virtuais para auxiliar nas aulas, tirar dúvidas dos alunos e reforçar o conteúdo.
            </p>
          </FeatureCard>
          <FeatureCard>
            <h3>Para Empresas</h3>
            <p>
              Atendimento ao cliente eficiente e personalizado, disponível 24/7.
            </p>
          </FeatureCard>
          <FeatureCard>
            <h3>Para Pessoas</h3>
            <p>
              Ajuda em tarefas específicas do dia a dia, adaptada ao seu estilo de vida.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </div>
  );
};

export default Home;