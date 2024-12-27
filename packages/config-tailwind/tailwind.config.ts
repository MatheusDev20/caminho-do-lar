import type { Config } from 'tailwindcss';

const config: Omit<Config, "content"> = {
  theme: {},
  darkMode: ['selector', '[data-theme="dark"]']
};

export default config;
