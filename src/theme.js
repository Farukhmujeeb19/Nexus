import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },      // Nexus blue
    secondary: { main: '#f50057' },    // Accent pink/red
    background: { default: '#f4f6f8' }, // Light background
    text: { primary: '#222', secondary: '#555' },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '2rem' },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
  },
});

export default theme;
