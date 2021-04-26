import React from 'react'

import { Button as EuiButton } from '.'

export default {
  title: 'EUI-Kit/atoms/Button',
  component: EuiButton,
  argTypes: {
    children: {
      name: 'children',
      type: { name: 'string', required: false },
      defaultValue: '😄 Button',
      description: 'Button text node',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
}

const Template = (args, { globals: { locale } }) => (
  <EuiButton
    {...args}
    children={
      typeof args.children === 'string' && locale === 'fa'
        ? '😄 دکمه'
        : args.children
    }
  />
)

export const Button = Template.bind({})
Button.args = {
  color: 'primary',
}
