import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';

// GitHub Pages settings up
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
const githubPagesBase = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath = githubPagesBase ? `/${githubPagesBase}/` : '/';

export default defineConfig({
  base: basePath,
  plugins: [react()],
  resolve: {
    alias: {
      App: path.resolve(dirname, 'src', 'App.tsx'),
      app: path.resolve(dirname, 'app'),
      widgets: path.resolve(dirname, 'widgets'),
      shared: path.resolve(dirname, 'shared'),
    }
  }
});
