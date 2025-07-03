import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/', // 🔁 Set to '/' for root or '/your-repo/' for GitHub Pages
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // ✅ allows testing PWA in dev
      },
      manifest: {
        name: 'Chandan Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#0d0d0d',
        theme_color: '#0d0d0d',
        icons: [
          {
            src: 'pwa-icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
