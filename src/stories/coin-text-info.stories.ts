import { Meta, StoryObj } from '@storybook/react'
import CoinTextInfo from '../components/coin-text-info/CoinTextInfo'
const meta: Meta<typeof CoinTextInfo> = {
  component: CoinTextInfo,
}

export default meta
type Story = StoryObj<typeof CoinTextInfo>
export const FirstStory: Story = {
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
