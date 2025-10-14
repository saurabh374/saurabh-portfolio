import styled, { keyframes } from "styled-components";

/* gentle float for the avatar (respects reduced motion in usage) */
const floatY = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  /* subtle depth on modern browsers */
  -webkit-backdrop-filter: saturate(140%) blur(6px);
  backdrop-filter: saturate(140%) blur(6px);

  /* angled tail */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
    /* clip paths often fight small screens; remove for readability */
    clip-path: none;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none; /* background shouldn’t block clicks */

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
  }

  @media (max-width: 640px) {
    margin-bottom: 24px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  object-fit: cover;

  /* soft primary glow ring */
  box-shadow:
    0 0 0 6px ${({ theme }) => (theme.primary ? theme.primary + '22' : 'rgba(0,0,0,0)')},
    0 12px 32px rgba(0, 0, 0, 0.25);

  /* gentle float animation */
  animation: ${floatY} 6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    line-height: 48px;
  }

  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 36px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
    border-radius: 6px;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
    max-width: 720px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 24px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: transform .15s ease, box-shadow .2s ease, opacity .2s ease;

  /* your gradient */
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow:
    0 10px 24px rgba(31, 38, 52, 0.45),
    0 2px 8px rgba(31, 38, 52, 0.25);

  &:hover {
    transform: translateY(-1px) scale(1.03);
    box-shadow:
      0 14px 28px rgba(31, 38, 52, 0.55),
      0 4px 12px rgba(31, 38, 52, 0.28);
    filter: brightness(1.02);
  }

  &:active {
    transform: translateY(0) scale(0.99);
    opacity: .95;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 3px;
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;
