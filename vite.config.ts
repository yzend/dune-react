import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss() as any],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 在这里添加你的 SCSS 选项，例如添加全局变量等
        // additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  build: {
    target: "modules",
    outDir: "dist",
    emptyOutDir: true,
    minify: false,
    lib: {
      // 入口文件将包含可以由你的包的用户导入的导出：
      entry: resolve(__dirname, "src/index.ts"),
      name: "dune-react",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "dayjs",
        "lodash-es",
        "axios",
        "file-saver",
        "motion",
        "framer-motion",
      ],
      output: [
        {
          format: "es",
          dir: "dist",
          entryFileNames: "[name].js",
          // 保留模块结构
          preserveModules: true,
          // 在根路径将保留的模块结构放在改文件夹下， ex: es/components/xxxxxx
          preserveModulesRoot: "src",
          // 确保外部依赖不会被打包
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "jsxRuntime",
            "react/jsx-dev-runtime": "jsxDevRuntime",
            dayjs: "dayjs",
            "lodash-es": "_",
            axios: "axios",
            "file-saver": "FileSaver",
            motion: "motion",
            "framer-motion": "framerMotion",
          },
        },
      ],
    },
  },
});
