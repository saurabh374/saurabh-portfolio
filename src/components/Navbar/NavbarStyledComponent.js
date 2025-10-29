import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const withAlpha = (hex, alpha = 0.6) => {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  const h = hex.replace('#', '');
  const normalized = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease;

  /* small accessible improvement: reduced motion */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 6px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  &:focus { outline: 2px solid ${({ theme }) => theme.primary}; outline-offset: 3px; }

  @media (max-width: 640px) {
    padding: 0;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  padding: 6px 4px;
  border-radius: 6px;

  :hover,
  :focus {
    color: ${({ theme }) => theme.primary};
    outline: none;
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: background 0.3s ease, color 0.3s ease, transform 0.12s ease;
  background: transparent;

  :hover,
  :focus {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
    outline: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.button`
  display: none;
  background: transparent;
  border: none;
  padding: 8px;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 3px;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 24px 24px 24px;
  background: ${({ theme }) => withAlpha(theme.card_light, 0.98)};
  transition: transform 0.4s ease, opacity 0.4s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  z-index: 1000;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  text-decoration: none;

  :hover,
  :focus {
    color: ${({ theme }) => theme.primary};
    outline: none;
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 6px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 640px) {
    padding: 0;
  }
`;
