import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$base300',
  borderRadius: '$md',
  padding: '$4',
})

export const App = () => {
  return <Button>Hello World</Button>
}
