import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/dist",
    build: {
        outDir: "C:\\Users\\rmar2\\mar\\projects\\tc-server\\dist"
    }
});
