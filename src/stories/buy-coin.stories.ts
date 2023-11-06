import { Meta, StoryObj } from '@storybook/react'
import BuyCoin from '../components/modal/add-coin-modal/buy-coin/BuyCoin'
const meta: Meta<typeof BuyCoin> = {
  component: BuyCoin,
  args: {
    coin: {
      id: 'bitcoin',
      name: 'Bitcoin',
      rank: '1',
      priceUsd: '20000',
      symbol: 'BTC',
      supply: '200',
      maxSupply: '200000',
      marketCapUsd: '2000000000',
      changePercent24Hr: '2',
    },
  },
}

export default meta
type Story = StoryObj<typeof BuyCoin>
export const FirstStory: Story = {}
