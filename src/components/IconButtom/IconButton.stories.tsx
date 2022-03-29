import { FiLogOut, FiChevronRight, FiChevronLeft  } from "react-icons/fi";
import { IconButton } from ".";

import {ComponentMeta, ComponentStory} from "@storybook/react"

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})

Default.args = {
  icon: <FiLogOut size={16} color="#000" />,
  onClick: () => {
    console.log('clicked')
  },
}