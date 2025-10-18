import React, { useEffect, useMemo, useState, Suspense, lazy } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Lazy: bigger chunks
const Projects = lazy(() => import("./components/Projects"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));

const GlobalStyle = createGlobalStyle`
  :root { color-scheme: ${({ theme }) => (theme === lightTheme ? "light" : "dark")}; }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    font-family: ${({ theme }) => theme.fonts?.main || "Inter, sans-serif"};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 1.5;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${({ theme }) => theme.fonts?.title || "Space Grotesk, sans-serif"};
    margin: 0;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.15;
  }

  ::selection {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }
`;
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background:
    linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  /* friendlier on mobile to avoid the 98% notch */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 28% 98%, 0 100%);
  @media (max-width: 768px) {
    clip-path: none;
  }
`;

const Toggle = styled.button`
  position: fixed;
  right: 16px;
  bottom: 20px;
  z-index: 1100;
  border: 1px solid ${({ theme }) => theme.text_secondary}55;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 8px 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0,0,0,.18);
  transition: transform .12s ease, box-shadow .2s ease, opacity .2s ease;
  &:hover { transform: translateY(-1px); box-shadow: 0 10px 22px rgba(0,0,0,.22); }
  &:active { transform: translateY(0); }
`;

function App() {
  // initial theme: localStorage -> prefers-color-scheme -> dark
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") return false;
    if (saved === "dark") return true;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark; // boolean: true = dark
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const [openModal, setOpenModal] = useState({ state: false, project: null });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    // helpful for mobile browser UI color
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme.bg);
  }, [darkMode, theme.bg]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          {/* Optional About section right under hero (you already import it) */}
          {/* <About /> */}
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>

          {/* Lazy-loaded: improves TTI */}
          <Suspense fallback={null}>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </Suspense>

          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>

          <Footer />

          <Suspense fallback={null}>
            {openModal.state && (
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            )}
          </Suspense>
        </Body>

        <Toggle onClick={() => setDarkMode((d) => !d)} aria-label="Toggle theme">
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </Toggle>
      </Router>
    </ThemeProvider>
  );
}

export default App;
