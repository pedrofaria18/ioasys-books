import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FiLogOut } from 'react-icons/fi'

import { IconButton } from '.'

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const Default = Template.bind({})

Default.args = {
  icon: <FiLogOut size={16} color="#000" />,
  onClick: () => {
    console.log('clicked')
  },
}
