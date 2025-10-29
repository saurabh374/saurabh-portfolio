// ProjectDetailsModal.jsx
import React, { useEffect, useState, useRef, memo } from 'react';
import { CloseRounded, Launch, Code } from '@mui/icons-material';
import { Modal } from '@mui/material';
import styled, { keyframes } from 'styled-components';

/* ================= Styled components (responsive + accessible) ================= */

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 24px 12px;
  transition: opacity 0.25s ease;
  -webkit-overflow-scrolling: touch;
  padding-bottom: calc(env(safe-area-inset-bottom) + 12px);

  @media (min-width: 960px) {
    padding: 48px 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 920px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 14px;
  max-height: calc(100vh - 48px);
  overflow: hidden;
  z-index: 50; /* ensure predictable stacking context */

  @media (min-width: 960px) {
    padding: 28px 32px;
    border-radius: 20px;
    max-height: calc(100vh - 96px);
  }
`;

/* scrollable content area inside the modal so header/actions remain visible */
const InnerScroll = styled.div`
  overflow-y: auto;
  padding-right: 6px;
  -webkit-overflow-scrolling: touch;
`;

/* Title + typography */
const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 6px;

  @media (min-width: 960px) {
    font-size: 30px;
  }
`;

const DateEl = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.2;
`;

/* Description */
const Desc = styled.p`
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  color: ${({ theme }) => theme.text_primary};

  @media (min-width: 960px) {
    font-size: 16px;
  }
`;

/* image area: responsive height using clamp */
const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: clamp(180px, 36vh, 360px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.28);
  margin-top: 8px;
  z-index: 10; /* lower than CloseBtn */

  @media (min-width: 960px) {
    height: 360px;
    border-radius: 16px;
    margin-top: 10px;
  }
`;

const ImageSkeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0.12) 20%,
    rgba(255, 255, 255, 0.04) 40%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s linear infinite;
  z-index: 5; /* ensure skeleton sits behind CloseBtn */

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.3s ease;
  background-color: ${({ theme }) => theme.card_light};
  z-index: 8;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* label & tags */
const Label = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.95;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + '18'};
  border: 1px solid ${({ theme }) => theme.primary + '44'};
  padding: 6px 12px;
  border-radius: 9999px;
  user-select: none;
`;

/* action buttons; become full width on mobile */
const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  align-items: center;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.12s ease, box-shadow 0.2s ease;

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    padding: 12px 16px;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const GhostButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.text_primary};
  border-color: ${({ theme }) => theme.text_secondary + '88'};
  box-shadow: none;

  &:hover {
    background-color: ${({ theme }) => theme.primary + '12'};
  }
`;

/* close button: larger tap target on mobile; top of stack with high z-index */
const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  background: ${({ theme }) => theme.card_light + '88'};
  border: none;
  color: ${({ theme }) => theme.text_primary};
  padding: 10px;
  border-radius: 10px;
  line-height: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 60; /* ensure CloseBtn sits on top of images/skeletons */

  &:hover {
    background: ${({ theme }) => theme.card_light + 'aa'};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.primary};
    outline-offset: 3px;
  }

  @media (min-width: 960px) {
    top: 14px;
    right: 18px;
    padding: 8px;
    background: transparent;
  }
`;

/* ================= Component ================= */

const ProjectDetailsModal = memo(function ProjectDetailsModal({ openModal, setOpenModal }) {
  const project = openModal?.project || null;
  const open = !!openModal?.state;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(project?.image || '');
  const wrapperRef = useRef(null);
  const previouslyFocused = useRef(null);

  // update image when project changes
  useEffect(() => {
    setImgLoaded(false);
    setImgSrc(project?.image || '');
  }, [project]);

  // prevent body scroll when modal open
  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      // set focus to wrapper for keyboard users
      setTimeout(() => {
        wrapperRef.current?.focus();
      }, 0);
    } else {
      document.body.style.overflow = '';
      // return focus to previously focused element
      if (previouslyFocused.current && previouslyFocused.current.focus) {
        previouslyFocused.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // keyboard handlers: Escape closes, Tab traps focus
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      } else if (e.key === 'Tab') {
        // simple focus trap
        const focusable = wrapperRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const handleClose = () => {
    setOpenModal({ state: false, project: null });
  };

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="project-title"
      aria-describedby="project-desc"
      aria-modal="true"
      closeAfterTransition
    >
      <Container onClick={onBackdropClick}>
        <Wrapper
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          aria-describedby="project-desc"
          tabIndex={-1}
          ref={wrapperRef}
        >
          <CloseBtn onClick={handleClose} aria-label="Close project details">
            <CloseRounded />
          </CloseBtn>

          <InnerScroll>
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

            <Title id="project-title">{project?.title || 'Untitled Project'}</Title>

            {project?.date && <DateEl>{project.date}</DateEl>}

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
                      rel="noopener noreferrer"
                      aria-label="Open live demo"
                    >
                      <Launch fontSize="small" /> Live Demo
                    </Button>
                  )}
                  {project.code && (
                    <GhostButton
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open source code"
                    >
                      <Code fontSize="small" /> Source Code
                    </GhostButton>
                  )}
                </Actions>
              </>
            )}
          </InnerScroll>
        </Wrapper>
      </Container>
    </Modal>
  );
});

export default ProjectDetailsModal;
