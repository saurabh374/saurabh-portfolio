import { CloseRounded, Launch, Code } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background-color: #000000a7;
  display: flex;
  align-items: flex-start; /* fix: 'top' isn't valid */
  justify-content: center;
  overflow-y: auto;
  transition: all 0.5s ease;
  padding: 32px 12px;
`;

const Wrapper = styled.div`
  max-width: 860px;
  width: 100%;
  border-radius: 16px;
  margin: 18px 0;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 12px 28px rgba(0,0,0,.35);
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 14px 6px 0 6px;
  @media (max-width: 600px) { font-size: 24px; }
`;

const Date = styled.div`
  font-size: 14px;
  margin: 2px 6px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px){ font-size: 12px; }
`;

const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0;
  line-height: 1.6;
  @media (max-width: 600px) { font-size: 14px; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  margin-top: 6px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 18px rgba(0,0,0,0.25);
`;

const ImageSkeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.06) 0%,
    rgba(255,255,255,0.18) 20%,
    rgba(255,255,255,0.06) 40%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s linear infinite;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 14px 6px 6px;
  text-transform: uppercase;
  letter-spacing: .08em;
  opacity: .9;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 6px 0 0;
`;

const Tag = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 6px 10px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.primary + '20'};
  border: 1px solid ${({ theme }) => theme.primary + '55'};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 6px 0;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 6px 16px rgba(0,0,0,.18);
  transition: transform .12s ease, box-shadow .2s ease, opacity .2s ease;

  &:hover { transform: translateY(-1px); box-shadow: 0 8px 18px rgba(0,0,0,.24); }
  &:active { transform: translateY(0); opacity: .95; }
`;

const GhostButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  border-color: ${({ theme }) => theme.text_secondary + '66'};
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 16px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  padding: 6px;
  border-radius: 10px;
  line-height: 0;

  &:hover { background: ${({ theme }) => theme.card_light + '44'}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.primary}; outline-offset: 2px; }
`;

const ProjectDetailsModal = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    const [imgLoaded, setImgLoaded] = React.useState(false);
    const [imgSrc, setImgSrc] = React.useState(project?.image || '');

    React.useEffect(() => {
        // when opening a different project, reset skeleton
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
            <Container onClick={(e) => {
                // allow clicking backdrop to close only when clicking the backdrop, not content
                if (e.target === e.currentTarget) handleClose();
            }}>
                <Wrapper role="dialog">
                    <CloseBtn onClick={handleClose} aria-label="Close project details">
                        <CloseRounded />
                    </CloseBtn>

                    {/* Image + skeleton */}
                    {imgSrc ? (
                        <ImageWrap>
                            {!imgLoaded && <ImageSkeleton aria-hidden="true" />}
                            <Image
                                src={imgSrc}
                                alt={project?.title ? `${project.title} preview` : 'Project preview'}
                                loading="lazy"
                                onLoad={() => setImgLoaded(true)}
                                onError={() => {
                                    // stop skeleton and remove broken image
                                    setImgLoaded(true);
                                    setImgSrc('');
                                }}
                                style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity .3s ease' }}
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
                                    <Button href={project.demo} target="_blank" rel="noreferrer noopener" aria-label="Open live demo">
                                        <Launch fontSize="small" /> Live Demo
                                    </Button>
                                )}
                                {project.code && (
                                    <GhostButton href={project.code} target="_blank" rel="noreferrer noopener" aria-label="Open source code">
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
