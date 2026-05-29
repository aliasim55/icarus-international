import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NETLIFY ? '/' : '/icarus-international/',
  plugins: [react()]
});
