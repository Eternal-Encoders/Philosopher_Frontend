import { SectionProvider } from 'app/providers/SectionProvider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import { ThemeProvider } from './app/providers/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SectionProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SectionProvider>
  </StrictMode>,
);
