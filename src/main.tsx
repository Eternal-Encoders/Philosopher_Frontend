import App from 'App/*';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { ThemeProvider } from './app/providers/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <HashRouter basename={import.meta.env.BASE_URL}>
        <App />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
);
