import React, { useEffect, useState } from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileMenuItems,
  MobileMenuLink
} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const sectionIds = ['about', 'skills', 'experience', 'projects', 'education'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id], [id]'))
      .filter((el) => el.id);

    const handleScroll = () => {
      const scrollY = window.scrollY + 120; // offset to account for navbar
      let current = '';

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 64,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  return (
    <Nav className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Primary">
      <NavbarContainer>
        <NavLogo to="/" aria-label="Home">
          <DiCssdeck size="2.4rem" color={theme.primary} />
          <Span>Portfolio</Span>
        </NavLogo>

        <MobileIcon
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((s) => !s)}
        >
          <FaBars />
        </MobileIcon>

        <NavItems>
          {sectionIds.map((id) => (
            <li key={id}>
              <NavLink
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </NavLink>
            </li>
          ))}
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
            Github Profile
          </GitHubButton>
        </ButtonContainer>

        <MobileMenu id="mobile-menu" isOpen={isOpen} aria-hidden={!isOpen}>
          <MobileMenuItems>
            {sectionIds.map((id) => (
              <li key={id}>
                <MobileMenuLink
                  href={`#${id}`}
                  className={activeSection === id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id);
                  }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </MobileMenuLink>
              </li>
            ))}
          </MobileMenuItems>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
            <GitHubButton
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '10px 16px',
                background: theme.primary,
                color: 'white',
                width: 'max-content',
              }}
            >
              Github Profile
            </GitHubButton>
          </div>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
