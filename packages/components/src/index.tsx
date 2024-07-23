import { styled } from './styles'

export type ButtonProps = {
  size: 'md' | 'lg'
}

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$base300',
  borderRadius: '$md',
  fontWeight: '$bold',
  padding: '$4',
  border: 'none',

  variants: {
    size: {
      md: {
        fontSize: 14,
        padding: '$2 $4',
      },

      lg: {
        fontSize: 16,
        padding: '$4 $6',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
