import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteImagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: true,
      },
      optipng: {
        optimizationLevel: 7, // Max level for PNG optimization
      },
      mozjpeg: {
        quality: 75, // Adjust quality for JPEGs (for future use)
      },
      pngquant: {
        quality: [0.6, 0.8], // Compress PNGs to the specified quality range
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
        ],
      },
    }),
  ],
  base: '/FP22FD-portfolio/', // This match with the GitHub repository name
});
