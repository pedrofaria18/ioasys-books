import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Profile } from '.'

export default {
  title: 'Profile',
  component: Profile,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Profile>

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'John Doe',
  onClick: () => {
    console.log('clicked')
  },
}
