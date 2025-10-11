import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// GitHub Pages settings up
const repositoryTitle = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath = repositoryTitle ? `/${repositoryTitle}/` : '/';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: basePath,
  optimizeDeps: {
    disabled: true,
  }
});
