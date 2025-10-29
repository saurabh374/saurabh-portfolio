import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { Bio } from '../../data/constants';
import HeroImg from '../../images/HeroImage.avif';
import HeroBgAnimation from '../HeroBgAnimation';
import {
    HeroBg,
    HeroContainer,
    HeroInnerContainer,
    HeroLeftContainer,
    HeroRightContainer,
    Img,
    ResumeButton,
    Span,
    SubTitle,
    TextLoop,
    Title
} from './HeroStyle';

const HeroSection = () => {
    const [imgLoaded, setImgLoaded] = React.useState(false);

    return (
        <section id="about" aria-label="About section">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>

                <HeroInnerContainer>
                    {/* --- Left Side (Text) --- */}
                    <HeroLeftContainer id="Left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                            <Title>
                                Hi, I’m <br />
                                <Span
                                    style={{
                                        background: 'linear-gradient(90deg, #6C63FF, #B367F1)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        display: 'inline-block'
                                    }}
                                >
                                    {Bio.name}
                                </Span>
                            </Title>

                            <TextLoop>
                                I'm a
                                <Span aria-hidden="true" style={{ display: 'inline-block' }}>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                            delay: 70,
                                            deleteSpeed: 40,
                                        }}
                                    />
                                </Span>
                            </TextLoop>

                            <SubTitle>{Bio.description}</SubTitle>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: 'spring', stiffness: 250 }}
                            >
                                <ResumeButton
                                    href={Bio.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open resume in new tab"
                                >
                                    🚀 Check Resume
                                </ResumeButton>
                            </motion.div>
                        </motion.div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.1, ease: 'easeOut' }}
                            style={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 16,
                                overflow: 'hidden'
                            }}
                        >
                            {!imgLoaded && (
                                <div
                                    aria-hidden="true"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: '50%',
                                        background:
                                            'linear-gradient(100deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.04) 100%)',
                                        backgroundSize: '200% 100%',
                                        animation: 'shimmer 1.5s infinite linear',
                                        filter: 'blur(6px)',
                                        zIndex: 0,
                                    }}
                                />
                            )}

                            <Img
                                src={HeroImg}
                                srcSet={`${HeroImg} 1x`}
                                alt={`${Bio.name} — portrait`}
                                loading="lazy"
                                style={{
                                    opacity: imgLoaded ? 1 : 0,
                                    transition: 'opacity 0.5s ease',
                                    zIndex: 1,
                                }}
                                onLoad={() => setImgLoaded(true)}
                            />
                        </motion.div>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>

            <style>
                {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
            </style>
        </section>
    );
};

export default HeroSection;
