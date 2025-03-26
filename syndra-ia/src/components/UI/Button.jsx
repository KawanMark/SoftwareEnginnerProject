import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme, variant }) => 
    variant === 'primary' ? theme.colors.primary : 'transparent'};
  color: ${({ theme, variant }) => 
    variant === 'primary' ? theme.colors.white : theme.colors.primary};
  border: ${({ theme, variant }) => 
    variant === 'primary' ? 'none' : `2px solid ${theme.colors.primary}`};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme, variant }) => 
      variant === 'primary' ? theme.colors.secondary : 'rgba(108, 99, 255, 0.1)'};
    ${({ variant }) => variant !== 'primary' && 'color: #4A40BF; border-color: #4A40BF;'}
  }
`;

export const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};