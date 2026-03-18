import { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import { createElement } from "react";
import { ThemeProvider } from "next-themes";
import { themes } from "storybook/theming";
import "./global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
  },
  initialGlobals: {
    backgrounds: { value: "light" },
  },
  decorators: [
    (Story) =>
      createElement(
        ThemeProvider,
        {
          attribute: "class",
          defaultTheme: "light",
          enableSystem: true,
          disableTransitionOnChange: true,
        },
        createElement(Story)
      ),
    withThemeByClassName<any>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
