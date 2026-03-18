import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);
const getAbsolutePath = (packageName: string) =>
  dirname(require.resolve(join(packageName, "package.json")));
const addonDocsPath = getAbsolutePath("@storybook/addon-docs");
const addonMcpPath = getAbsolutePath("@storybook/addon-mcp");
const addonThemesPath = getAbsolutePath("@storybook/addon-themes");
const addonVitestPath = getAbsolutePath("@storybook/addon-vitest");
const motionPath = getAbsolutePath("motion");
const tsparticlesSlimPath = getAbsolutePath("@tsparticles/slim");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    {
      name: getAbsolutePath("@storybook/addon-docs"),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            providerImportSource: "@storybook/addon-docs/mdx-react-shim",
          },
        },
      },
    },
    addonMcpPath,
    getAbsolutePath("@storybook/addon-themes"),
    addonVitestPath,
  ],
  features: {
    experimentalComponentsManifest: true,
  },

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    config.resolve ??= {};
    config.resolve.preserveSymlinks = true;
    const alias = Array.isArray(config.resolve.alias)
      ? config.resolve.alias
      : config.resolve.alias
        ? Object.entries(config.resolve.alias).map(([find, replacement]) => ({
            find,
            replacement,
          }))
        : [];

    alias.push(
      {
        find: "@storybook/addon-docs/blocks",
        replacement: join(addonDocsPath, "dist/blocks.js"),
      },
      {
        find: "@storybook/addon-docs/mdx-react-shim",
        replacement: join(addonDocsPath, "dist/mdx-react-shim.js"),
      },
      {
        find: "@storybook/addon-themes",
        replacement: join(addonThemesPath, "dist/index.js"),
      },
      {
        find: "motion/react",
        replacement: join(motionPath, "dist/es/react.mjs"),
      },
      {
        find: "@tsparticles/slim",
        replacement: join(tsparticlesSlimPath, "esm/index.js"),
      }
    );

    config.resolve.alias = alias;

    return config;
  },
};
export default config;
