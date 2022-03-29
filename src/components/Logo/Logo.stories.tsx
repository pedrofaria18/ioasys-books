import { ILogo, Logo } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    isWhite: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export function Default(args: ILogo) {
  return <Logo {...args} />
}
