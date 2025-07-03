// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'aos/dist/aos.css'; // for animations

// ✅ Register service worker for PWA
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('🔄 New update available. Refresh now?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('✅ App is ready to work offline.');
  },
});

const container = document.getElementById('root');
if (!container) throw new Error('❌ Root container not found');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
