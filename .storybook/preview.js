import * as React from 'react'
import ThemeProvider from '../src/setup/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
]

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'fa',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'fa', right: '🇮🇷', title: 'فارسی' },
        { value: 'en', right: '🇺🇸', title: 'English' },
      ],
    },
  },
}
