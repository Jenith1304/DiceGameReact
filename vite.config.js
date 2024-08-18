import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages'; // Only if you installed vite-plugin-gh-pages

export default defineConfig({
  plugins: [
    react(),
    ghPages() // Only if you installed vite-plugin-gh-pages
  ],
  base: '/DiceGameReact/', // Replace 'your-repo-name' with your actual GitHub repository name
  build: {
    outDir: 'build', // GitHub Pages serves from the `build` or `docs` folder by default
  },
});
