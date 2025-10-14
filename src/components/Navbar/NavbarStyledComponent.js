import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

/* Helper: convert hex (#RRGGBB) to rgba with alpha */
const withAlpha = (hex, alpha = 0.6) => {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  const h = hex.replace('#', '');
  const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const Nav = styled.div`
  background-color: ${({ theme }) => withAlpha(theme.card_light || theme.bgLight, 0.85)};
  -webkit-backdrop-filter: saturate(160%) blur(8px);
  backdrop-filter: saturate(160%) blur(8px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: background-color .25s ease, box-shadow .25s ease;

  /* Optional: add a stronger shadow when scrolled (toggle .scrolled from component) */
  &.scrolled {
    box-shadow: 0 8px 24px rgba(0,0,0,.15);
    background-color: ${({ theme }) => withAlpha(theme.card_light || theme.bgLight, 0.92)};
  }

  @media (max-width: 960px) {
    transition: 0.8s all ease;
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
  width: 80%;    
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;

  @media (max-width: 640px) {
    padding: 0;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: .2px;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  text-decoration: none;
  padding-bottom: 4px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    color: ${({ theme }) => theme.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease-in-out;
    border-radius: 2px;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 42px;
  border-radius: 999px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 18px;
  font-weight: 600;
  text-decoration: none;
  font-size: 15px;
  transition: background .2s ease, color .2s ease, transform .12s ease, box-shadow .2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    box-shadow: 0 6px 16px ${({ theme }) => withAlpha(theme.primary, .35)};
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }

  @media screen and (max-width: 768px) { 
    font-size: 14px;
    height: 40px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: grid;
    place-items: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    background: transparent;
    border: none;
    padding: 6px;
    border-radius: 10px;

    &:focus-visible {
      outline: 2px solid ${({ theme }) => withAlpha(theme.primary, .6)};
      outline-offset: 2px;
    }
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
  padding: 16px 40px 24px 40px;

  background: ${({ theme }) => withAlpha(theme.card_light || theme.bgLight, 0.9)};
  -webkit-backdrop-filter: saturate(160%) blur(10px);
  backdrop-filter: saturate(160%) blur(10px);

  transition: transform .35s ease, opacity .25s ease, visibility .25s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};

  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.20);
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1')};
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  cursor: pointer;
  transition: color .2s ease-in-out, transform .12s ease;
  text-decoration: none;
  position: relative;

  &:hover { color: ${({ theme }) => theme.primary}; }
  &:active { transform: translateY(1px); }

  &.active,
  &[data-active="true"] { color: ${({ theme }) => theme.primary}; }
  &.active::after,
  &[data-active="true"]::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -6px;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 42px;
  border-radius: 999px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 18px;
  font-weight: 600;
  text-decoration: none;
  font-size: 15px;
  transition: background .2s ease, color .2s ease, transform .12s ease, box-shadow .2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    box-shadow: 0 6px 16px ${({ theme }) => withAlpha(theme.primary, .35)};
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  cursor: pointer;
  transition: color .2s ease-in-out, transform .12s ease;
  text-decoration: none;
  position: relative;

  &:hover { color: ${({ theme }) => theme.primary}; }
  &:active { transform: translateY(1px); }

  &.active,
  &[data-active="true"] { color: ${({ theme }) => theme.primary}; }
  &.active::after,
  &[data-active="true"]::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -6px;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;

  @media (max-width: 640px) {
    padding: 0;
  }
`;
