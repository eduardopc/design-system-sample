import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@design-system-sample/components'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/eduardopc.png',
    alt: 'Eduardo Pacheco Avatar',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
