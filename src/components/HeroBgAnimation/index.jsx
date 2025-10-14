import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none; /* keep it decorational */
  will-change: transform;
  transform: translateZ(0); /* promote to its own layer */

  /* expose theme colors as CSS variables */
  --accent: ${({ theme }) => theme.primary || "#6C63FF"};
  --stroke: ${({ theme }) => (theme.text_primary ? theme.text_primary + "22" : "#ffffff22")};
  --stroke-strong: ${({ theme }) => (theme.text_primary ? theme.text_primary + "55" : "#ffffff55")};

  /* improve contrast slightly in light themes */
  @media (prefers-color-scheme: light) {
    --stroke: rgba(0,0,0,.12);
    --stroke-strong: rgba(0,0,0,.28);
  }

  /* respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .anim { animation: none !important; }
    .movePath animateMotion { dur: 0s !important; }
  }
`;

const HeroBgAnimation = () => {
  const ref = React.useRef(null);

  // lightweight parallax: translate + tiny rotate
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = null;
    let current = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width;  // 0..1
      const my = (e.clientY - rect.top) / rect.height;  // 0..1
      // map to small range
      target.x = (mx - 0.5) * 12; // px
      target.y = (my - 0.5) * 12; // px
    };

    const tick = () => {
      // springy easing
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      const rot = (current.x - current.y) * 0.03;
      el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) rotate(${rot}deg)`;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <Div ref={ref} aria-hidden="true">
      <svg
        className="BgAnimation__svg"
        viewBox="0 0 602 602"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        {/* soft glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* reuse your gradients, now tinted by CSS vars */}
          <radialGradient id="ring" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
            gradientTransform="translate(301 301) rotate(90) scale(300)">
            <stop offset="0.33" stopColor="var(--stroke-strong)" />
            <stop offset="1" stopColor="var(--stroke)" stopOpacity="0" />
          </radialGradient>

          {/* accent stroked gradient */}
          <linearGradient id="accentStroke" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="var(--accent)" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* rings */}
        <g opacity="0.18" filter="url(#glow)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
            stroke="url(#ring)"
            id="path_0"
          />
          <path
            d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
            stroke="url(#ring)"
            id="path_1"
          />
          <path
            d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
            stroke="url(#ring)"
            id="path_2"
          />
        </g>

        {/* orbiters (tinted to accent) */}
        <g stroke="url(#accentStroke)" className="anim movePath" opacity="0.9">
          {/* orbiter 1 */}
          <ellipse cx="295.027" cy="193.118" rx="1.1" ry="1.1" fill="var(--accent)">
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#path_2" />
            </animateMotion>
          </ellipse>
          <path d="M294.685 193.474L268.932 219.258" stroke="url(#accentStroke)">
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#path_2" />
            </animateMotion>
          </path>

          {/* orbiter 2 */}
          <ellipse cx="476.525" cy="363.313" rx="1.1" ry="1.1" fill="var(--accent)">
            <animateMotion dur="12s" begin="1s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#path_0" />
            </animateMotion>
          </ellipse>
          <path d="M476.171 362.952L450.417 337.168" stroke="url(#accentStroke)">
            <animateMotion dur="12s" begin="1s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#path_0" />
            </animateMotion>
          </path>

          {/* orbiter 3 */}
          <ellipse cx="333.324" cy="382.691" rx="1.1" ry="1.1" fill="var(--accent)">
            <animateMotion dur="7s" begin="0.5s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#path_1" />
            </animateMotion>
          </ellipse>
          <path d="M333.667 382.335L359.42 356.551" stroke="url(#accentStroke)">
            <animateMotion dur="7s" begin="0.5s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#path_1" />
            </animateMotion>
          </path>
        </g>
      </svg>
    </Div>
  );
};

export default HeroBgAnimation;
