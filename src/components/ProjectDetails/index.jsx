import { CloseRounded, Launch, Code } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 48px 20px;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 860px;
  width: 100%;
  background-color: ${(props) => props.theme.card};
  color: ${(props) => props.theme.text_primary};
  border-radius: 20px;
  padding: 28px 32px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 18px;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.text_primary};
  margin: 0 0 6px;
  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.text_secondary};
  line-height: 1.2;
`;

const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.text_primary};
  line-height: 1.7;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 860px;      
  height: 360px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
`;

const ImageSkeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.18) 20%,
    rgba(255, 255, 255, 0.06) 40%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s linear infinite;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;   /* fit inside container without cropping */
  display: block;
  transition: opacity 0.4s ease;
  background-color: ${(props) => props.theme.card_light}; /* optional placeholder bg */
`;


const Label = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.text_primary};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.9;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.primary + '22'};
  border: 1.5px solid ${(props) => props.theme.primary + '55'};
  padding: 7px 14px;
  border-radius: 9999px;
  cursor: default;
  user-select: none;
  transition: background-color 0.2s ease;

  &:hover,
  &:focus-visible {
    background-color: ${(props) => props.theme.primary + '44'};
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 12px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.primary};
  transition: transform 0.15s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0);
    opacity: 0.9;
  }
`;

const GhostButton = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.text_primary};
  border-color: ${(props) => props.theme.text_secondary + 'aa'};
  box-shadow: none;

  &:hover {
    background-color: ${(props) => props.theme.primary + '15'};
    box-shadow: none;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 18px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.text_primary};
  padding: 8px;
  border-radius: 12px;
  line-height: 0;
  transition: background-color 0.25s ease;

  &:hover {
    background: ${(props) => props.theme.card_light + '55'};
  }
  &:focus-visible {
    outline: 3px solid ${(props) => props.theme.primary};
    outline-offset: 3px;
  }
`;

const ProjectDetailsModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState(project?.image || '');

  React.useEffect(() => {
    setImgLoaded(false);
    setImgSrc(project?.image || '');
  }, [project]);

  const handleClose = () => setOpenModal({ state: false, project: null });

  return (
    <Modal
      open={!!openModal?.state}
      onClose={handleClose}
      aria-labelledby="project-title"
      aria-describedby="project-desc"
    >
      <Container
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <Wrapper role="dialog">
          <CloseBtn onClick={handleClose} aria-label="Close project details">
            <CloseRounded />
          </CloseBtn>

          {imgSrc ? (
            <ImageWrap>
              {!imgLoaded && <ImageSkeleton aria-hidden="true" />}
              <Image
                src={imgSrc}
                alt={project?.title ? `${project.title} preview` : 'Project preview'}
                loading="lazy"
                onLoad={() => setImgLoaded(true)}
                onError={() => {
                  setImgLoaded(true);
                  setImgSrc('');
                }}
                style={{ opacity: imgLoaded ? 1 : 0 }}
              />
            </ImageWrap>
          ) : null}

          <Title id="project-title">{project?.title}</Title>
          {project?.date && <Date>{project.date}</Date>}

          {project?.tags?.length > 0 && (
            <>
              <Label>Tech</Label>
              <Tags>
                {project.tags.map((tag, idx) => (
                  <Tag key={`${tag}-${idx}`}>{tag}</Tag>
                ))}
              </Tags>
            </>
          )}

          {project?.description && (
            <>
              <Label>Description</Label>
              <Desc id="project-desc">{project.description}</Desc>
            </>
          )}

          {(project?.demo || project?.code) && (
            <>
              <Label>Links</Label>
              <Actions>
                {project.demo && (
                  <Button
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Open live demo"
                  >
                    <Launch fontSize="small" /> Live Demo
                  </Button>
                )}
                {project.code && (
                  <GhostButton
                    href={project.code}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Open source code"
                  >
                    <Code fontSize="small" /> Source Code
                  </GhostButton>
                )}
              </Actions>
            </>
          )}
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetailsModal;
