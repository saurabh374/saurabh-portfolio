import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#854CE6',
        },
        background: {
            default: '#000000',
            paper: '#1C1C27',
        },
        text: {
            primary: '#F2F3F4',
            secondary: '#b1b2b3',
        },
    },
    fonts: {
        title: "Space Grotesk, Inter, sans-serif",
        main: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    },
    // Custom properties
    bg: "#000000",
    bgLight: "#1C1C27",
    card: "#171721",
    card_light: '#191924',
    button: "#854CE6",
    white: "#FFFFFF",
    shadow: "0 8px 24px rgba(2,6,23,0.6)"
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#854CE6',
        },
        background: {
            default: '#FFFFFF',
            paper: '#f0f0f0',
        },
        text: {
            primary: '#111111',
            secondary: '#48494a',
        },
    },
    fonts: {
        title: "Space Grotesk, Inter, sans-serif",
        main: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    },
    // Custom properties
    bg: "#FFFFFF",
    bgLight: "#f0f0f0",
    card: "#FFFFFF",
    button: "#5c5b5b",
    white: "#FFFFFF",
    shadow: "0 6px 18px rgba(16,24,40,0.06)"
});