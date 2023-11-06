import { Meta, StoryObj } from '@storybook/react'
import ProfileCoin from '../components/modal/profileModal/profile-coin/ProfileCoin'
const meta: Meta<typeof ProfileCoin> = {
  component: ProfileCoin,
}

export default meta
type Story = StoryObj<typeof ProfileCoin>
export const Empty: Story = {}
export const Full: Story = {
  args: {
    coin: {
      id: 'bitcoin',
      count: 2,
      totalPrice: 20313,
      symbol: 'BTC',
    },
  },
}
