// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import tailwindcss from '@tailwindcss/vite';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
//   resolve: {
//     alias: {
//       '@components': path.resolve(__dirname, 'src/components'),
//       '@modules': path.resolve(__dirname, 'src/modules'),
//       '@layouts': path.resolve(__dirname, 'src/layouts'),
//       '@routers': path.resolve(__dirname, 'src/routers'),
//     },
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { VitePWA } from 'vite-plugin-pwa';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically updates the service worker
      devOptions: {
        enabled: true, // Enables PWA in development mode
      },
      manifest: {
        name: 'Your App Name',
        short_name: 'AppName',
        description: 'Your app description',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico}'], // Cache these files
      },
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@routers': path.resolve(__dirname, 'src/routers'),
    },
  },
});
