import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@design-system-sample/components'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
  },
}
