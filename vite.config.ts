import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Specify your desired port number
    host: true, // Optional: allows access via network IP (useful for testing on other devices)
  },
  define: {
    'process.env': process.env,
  },
});
