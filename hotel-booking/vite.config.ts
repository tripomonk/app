import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(({ mode }) => ({
  base: mode === 'preview-single' ? './' : '/hotel-booking/',
  plugins: [
    react(),
    ...(mode === 'preview-single' ? [viteSingleFile()] : []),
  ],
  build:
    mode === 'preview-single'
      ? { outDir: 'dist-preview', assetsInlineLimit: 100_000_000 }
      : { outDir: 'dist' },
}));
