import { Meta, StoryObj } from '@storybook/react'
import AddCoin from '../components/coin-table/coin-item/addCoin/AddCoin'
const meta: Meta<typeof AddCoin> = {
  component: AddCoin,
}

export default meta
type Story = StoryObj<typeof AddCoin>
export const FirstStory: Story = {}
