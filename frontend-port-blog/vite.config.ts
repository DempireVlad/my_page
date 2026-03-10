import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { build, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devToolsJsone from "vite-plugin-devtools-json";
import Inspect from "vite-plugin-inspect";


export default defineConfig({
  assetsInclude: ["**/*.md"],
  plugins: [devToolsJsone(), tailwindcss(), reactRouter(), tsconfigPaths(), devToolsJsone(), Inspect({
    build: true,
    outputDir: "inspect",
  }
  )],
});
