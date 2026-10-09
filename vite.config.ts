import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Match your GitHub repo name (case-sensitive).
  // If you rename the repo, update this to '/your-repo-name/'.
  base: '/Vanguard-/',
});
