import { Meta, StoryObj } from '@storybook/react'
import ProfileInfo from '../components/modal/profileModal/profile-info/ProfileInfo'
const meta: Meta<typeof ProfileInfo> = {
  component: ProfileInfo,
}

export default meta
type Story = StoryObj<typeof ProfileInfo>
export const FirstStory: Story = {
  args: {
    nowPrice: 200,
    oldPrice: 100,
  },
}
