import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// `npm run build:preview` produces one self-contained HTML (memory router) for sharing.
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'preview-single' ? [viteSingleFile()] : [])],
  build: mode === 'preview-single' ? { outDir: 'dist-preview', assetsInlineLimit: 100_000_000 } : {},
}));
