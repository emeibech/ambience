import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        theme_color: '#2A0134',
        background_color: '#2A0134',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        short_name: 'Emeibech Ambience',
        description: 'Emeibech Ambience',
        name: 'Emeibech Ambience',
        icons: [
          {
            src: '/192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});
