import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel([
            'resources/ts/app.tsx'
        ]),
        react(),
    ],
    resolve: {
        alias: {
            '@': './resources/ts'
        }
    },
    server: {
        strictPort: true,
        port: 3030,
        // https: true,
        hmr: {
            host: 'localhost',
        },
    },
    optimizeDeps: {
        include: [
            'axios',
            'lodash-es',
            'react'
        ],
    },
});
