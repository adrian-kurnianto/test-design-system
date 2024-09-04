import type { Preview } from "@storybook/vue3";
import { withVuetifyTheme } from "./withVuetifyTheme.decorator";
import { registerPlugins } from '../src/plugins'
import { setup } from '@storybook/vue3';

// app.use(vuetify);

setup((app) => {
  registerPlugins(app);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: "vuetify.theme.defaultTheme",
    description: "Global theme for components",
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const decorators = [withVuetifyTheme];

export default preview;
