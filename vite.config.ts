import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// GitHub Pages settings up
const githubPagesBase = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath = githubPagesBase ? `/${githubPagesBase}/` : '/';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: basePath,
});
