import React, { useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { skills as skillsData } from "../../data/constants";


// ---- Animations ----
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// ---- Layout ----
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-inline: 12px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

export const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: 0.3px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 680px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 6px 0 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

/* ---------- New: Controls (search + tiny count) ---------- */
const Controls = styled.div`
  width: 100%;
  max-width: 760px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 12px;
  margin-top: 14px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Search = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => (theme.text_secondary || "#888") + "66"};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 14px;
  font-size: 14px;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;

  &::placeholder { opacity: .7; }
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px rgba(79,140,255,.15);
  }
`;

const ResultCount = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  justify-self: end;
`;

/* ---------- Grid ---------- */
const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 22px;
  margin-top: 18px;
`;

/* ---------- Card ---------- */
const SkillCard = styled.article`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  border-radius: 16px;
  padding: 0; /* header/body separation */
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(23, 92, 230, 0.22) 0px 8px 28px;
  }
`;

/* ---------- Collapsible header ---------- */
const CardHeader = styled.button`
  width: 100%;
  background: transparent;
  border: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 16px 18px;
  gap: 8px;
  border-radius: 16px 16px 0 0;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 3px;
    border-radius: 16px;
  }
`;

const SkillTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_secondary};
  letter-spacing: 0.2px;
  text-align: left;
`;

const ToggleIcon = styled.span`
  width: 18px;
  height: 18px;
  display: inline-block;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
  transition: transform .15s ease;
  mask: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
    no-repeat center / contain;
  background: ${({ theme }) => theme.text_secondary};
`;

/* ---------- Body ---------- */
const CardBody = styled.div`
  padding: ${({ $open }) => ($open ? "0 18px 18px 18px" : "0 18px")};
  height: auto;
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows .2s ease;
  overflow: hidden;
`;

const SkillListScroller = styled.div`
  overflow: hidden;
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 12px;
  margin: 0;
  padding: 0;
`;

/* ---------- Item ---------- */
const SkillItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary + "80"};
  color: ${({ theme }) => theme.text_primary + "cc"};
  font-size: 14px;
  font-weight: 500;
  background: ${({ theme }) =>
    theme.chip_bg || "rgba(133, 76, 230, 0.10)"};
  transition: background 0.2s ease, transform 0.12s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) =>
    theme.chip_bg_hover || "rgba(133, 76, 230, 0.16)"};
  }
`;

// Icon with black backing + shimmer while loading
const SkillIconWrap = styled.span`
  position: relative;
  display: inline-flex;
  height: 26px;
  width: 26px;
  min-width: 26px;
  border-radius: 6px;
  background: #000; /* keep your original black backing */
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SkillIconSkeleton = styled.span`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.08) 0%,
    rgba(255,255,255,0.25) 20%,
    rgba(255,255,255,0.08) 40%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.15s linear infinite;
  border-radius: 6px;
`;

const SkillIconImg = styled.img`
  height: 70%;
  width: 70%;
  object-fit: contain;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.1));
  transition: opacity 0.25s ease, transform 0.15s ease;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};

  ${SkillItem}:hover & {
    transform: scale(1.05);
  }
`;

const SkillName = styled.span`
  line-height: 1;
`;

/* ---- Helper: per icon loader/fallback ---- */
const SkillIcon = ({ src, alt, defaultImg }) => {
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src || defaultImg);

  return (
    <SkillIconWrap aria-hidden="true">
      {!loaded && <SkillIconSkeleton />}
      <SkillIconImg
        src={imgSrc}
        alt={alt || "Skill"}
        $loaded={loaded}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (imgSrc !== defaultImg) {
            setImgSrc(defaultImg);
          } else {
            setLoaded(true); // stop skeleton even if default fails
          }
        }}
      />
    </SkillIconWrap>
  );
};

const Skills = () => {
  const [query, setQuery] = useState("");
  const [openMap, setOpenMap] = useState({}); // { "Frontend": true, ... }

  const normalized = (s) => (s || "").toLowerCase().trim();

  const filteredGroups = useMemo(() => {
    const q = normalized(query);
    if (!q) return skillsData;
    return skillsData
      .map((group) => ({
        ...group,
        skills: group.skills?.filter((it) =>
          normalized(it.name).includes(q)
        ),
      }))
      .filter((g) => g.skills && g.skills.length > 0);
  }, [query]);

  const totalSkills = useMemo(
    () => skillsData.reduce((acc, g) => acc + (g.skills?.length || 0), 0),
    []
  );
  const shownSkills = useMemo(
    () => filteredGroups.reduce((acc, g) => acc + (g.skills?.length || 0), 0),
    [filteredGroups]
  );

  const toggle = (title) =>
    setOpenMap((m) => ({ ...m, [title]: !(m?.[title]) }));

  return (
    <Container id="skills" aria-labelledby="skills-heading">
      <Wrapper>
        <Title id="skills-heading">Skills</Title>
        <Desc>
          Here are some of my skills I’ve been working with over the past few years.
        </Desc>

        <Controls>
          <Search
            type="search"
            placeholder="Search skills (e.g., React, Node.js, SQL)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search skills"
          />
          <ResultCount>
            {shownSkills} / {totalSkills} skills
          </ResultCount>
        </Controls>

        <SkillsContainer>
          {filteredGroups.map((group, gIdx) => {
            const title = group.title || `Group ${gIdx + 1}`;
            const open = openMap[title] ?? true; // default open

            return (
              <SkillCard key={title} aria-label={`${title} skills`}>
                <CardHeader
                  onClick={() => toggle(title)}
                  aria-expanded={open}
                  aria-controls={`panel-${gIdx}`}
                  title={open ? "Collapse" : "Expand"}
                >
                  <SkillTitle>{title}</SkillTitle>
                  <ToggleIcon $open={open} />
                </CardHeader>

                <CardBody $open={open} id={`panel-${gIdx}`}>
                  <SkillListScroller>
                    <SkillList>
                      {group.skills?.map((item, idx) => (
                        <SkillItem key={`${item.name || "Skill"}-${idx}`}>
                          <SkillIcon defaultImg={item?.defaultImg} src={item.image} alt={item.name} />
                          <SkillName>{item.name}</SkillName>
                        </SkillItem>
                      ))}
                    </SkillList>
                  </SkillListScroller>
                </CardBody>
              </SkillCard>
            );
          })}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
