import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      proxy: {
        '/api/send-email': {
          target: 'https://api.resend.com',
          changeOrigin: true,
          rewrite: () => '/emails',
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq, req) => {
              const chunks: Buffer[] = [];
              req.on('data', (chunk: Buffer) => chunks.push(chunk));
              req.on('end', () => {
                const body = JSON.parse(Buffer.concat(chunks).toString());
                const resendBody = JSON.stringify({
                  from: 'Ducote Roofing <hello@ducoteroofingandrepair.com>',
                  to: 'caleb.ducoteroofing@gmail.com',
                  reply_to: body.email,
                  subject: `New Contact: ${body.name} — ${body.service}`,
                  html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;"><h2>New Contact from ${body.name}</h2><p><strong>Email:</strong> ${body.email}</p><p><strong>Phone:</strong> ${body.phone}</p><p><strong>Service:</strong> ${body.service}</p>${body.message ? `<p><strong>Message:</strong> ${body.message}</p>` : ''}</div>`,
                });
                proxyReq.removeHeader('content-length');
                proxyReq.setHeader('Content-Length', Buffer.byteLength(resendBody));
                proxyReq.setHeader('Authorization', `Bearer ${env.RESEND_API_KEY}`);
                proxyReq.setHeader('Content-Type', 'application/json');
                proxyReq.write(resendBody);
              });
            });
          },
        },
      },
    },
  };
});
