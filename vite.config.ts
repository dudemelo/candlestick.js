import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
    publicDir: command === 'serve' ? 'public' : false,
    build: {
        lib: {
            entry: "src/main.ts",
            name: "Candlestick",
            fileName: "candlestick",
        },
        rollupOptions: {
            external: ["public"],
        },
    },
}));
