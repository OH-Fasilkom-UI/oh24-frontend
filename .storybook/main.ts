import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../components/stories/*.stories.tsx'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: [
    '../public',
    {
      from: '../app/fonts',
      to: '',
    },
  ],
}
export default config
