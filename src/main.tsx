// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ✅ Register service worker for PWA (only if vite-plugin-pwa is correctly configured)
import { registerSW } from 'virtual:pwa-register';

// ✅ Setup SW update handler
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('🆕 New content is available. Do you want to refresh?')) {
      updateSW(true); // triggers update
    }
  },
  onOfflineReady() {
    console.log('✅ App is ready to work offline.');
  },
});

// ✅ Find root container & render
const container = document.getElementById('root');

if (!container) {
  throw new Error('❌ Root container not found');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
