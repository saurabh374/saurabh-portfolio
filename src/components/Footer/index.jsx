import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styled from "styled-components";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2.5rem 0 2rem;
  display: flex;
  justify-content: center;
  background: ${({ theme }) =>
    theme.bgLight || "transparent"}; /* subtle panel look */
  /* optional gradient:
  background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.04) 42.33%, rgba(150, 0, 225, 0.04) 127.07%);
  */
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  padding: 0 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.primary};
  margin: 0;
`;

const Tagline = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 820px;
  margin-top: 0.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2rem;
  justify-content: center;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.05rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Divider = styled.hr`
  width: 100%;
  max-width: 1000px;
  border: none;
  height: 1px;
  background: ${({ theme }) => (theme.text_secondary || "#888") + "33"};
  margin: 8px 0 4px;
`;

const ContactStrip = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ContactItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 0.95rem;
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => (theme.text_secondary || "#777") + "44"};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ $variant, theme }) =>
    $variant === "ghost" ? theme.text_primary : "#fff"};
  background: ${({ $variant, theme }) =>
    $variant === "ghost" ? (theme.card_light || theme.bgLight) : theme.primary};
  border: 1px solid
    ${({ $variant, theme }) =>
    $variant === "ghost" ? (theme.text_secondary || "#666") + "55" : theme.primary};
  box-shadow: ${({ $variant }) =>
    $variant === "ghost" ? "none" : "0 6px 14px rgba(0,0,0,0.15)"};
  transition: transform 0.15s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ $variant }) =>
    $variant === "ghost" ? "none" : "0 8px 18px rgba(0,0,0,0.2)"};
    opacity: 0.95;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => (theme.text_secondary || "#777") + "44"};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);
  }
`;

const BottomRow = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 8px;
  }
`;

const Copyright = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 14px;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 0.9rem;
  // a {
  // }
  a:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const BackToTop = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => (theme.text_secondary || "#777") + "44"};
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);
  }
`;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <Brand>
          <Logo>{Bio?.name || "Saurabh Patil"}</Logo>
          <Tagline>
            {Bio?.roles?.join(" • ") || "Software Engineer • Problem Solver"}
          </Tagline>
        </Brand>

        <Nav aria-label="Footer navigation">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>

        <Divider />

        <ContactStrip>
          {Bio?.email && (
            <ContactItem href={`mailto:${Bio.email}`} aria-label="Email">
              <EmailIcon fontSize="small" />
              {Bio.email}
            </ContactItem>
          )}
          {Bio?.location && (
            <ContactItem href="#contact" aria-label="Location">
              <LocationOnIcon fontSize="small" />
              {Bio.location}
            </ContactItem>
          )}
        </ContactStrip>

        <ButtonsRow>
          {Bio?.portfolio && (
            <Button
              href={Bio.portfolio}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open portfolio"
            >
              <LaunchIcon fontSize="small" />
              Portfolio
            </Button>
          )}
          {Bio?.resume && (
            <Button
              href={Bio.resume}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Download resume"
              $variant="ghost"
            >
              <PictureAsPdfIcon fontSize="small" />
              Resume
            </Button>
          )}
        </ButtonsRow>

        <SocialMediaIcons>
          {Bio?.linkedin && (
            <SocialMediaIcon
              href={Bio.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </SocialMediaIcon>
          )}
          {Bio?.github && (
            <SocialMediaIcon
              href={Bio.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              title="GitHub"
            >
              <GitHubIcon />
            </SocialMediaIcon>
          )}
        </SocialMediaIcons>

        <BottomRow>
          <Copyright>
            &copy; {year} {Bio?.name || "Saurabh Patil"}. All rights reserved.
          </Copyright>

          {/* <LegalLinks>
            Privacy Terms
          </LegalLinks> */}

          <BackToTop
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUpwardIcon fontSize="small" />
            Top
          </BackToTop>
        </BottomRow>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
