import { Profile } from ".";

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Profile',
  component: Profile,
  argTypes: {
    name: {
      control: {
        type: 'text',
      }
    }
  }
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'John Doe',
  onClick: () => {
    console.log('clicked');
  }
}