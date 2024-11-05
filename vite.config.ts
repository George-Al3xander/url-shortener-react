import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { VITE_BASE } from "./src/lib/constants";
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        open: true,
        port: 3000,
    },
    base: `/${VITE_BASE}/`,
});
