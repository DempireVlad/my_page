import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { build, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devToolsJsone from "vite-plugin-devtools-json";
import Inspect from "vite-plugin-inspect";


export default defineConfig(({ command }) => ({
  assetsInclude: ["**/*.md"],
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    command !== 'build' && devToolsJsone(),
    command !== 'build' && Inspect(), 
  ],
}));
