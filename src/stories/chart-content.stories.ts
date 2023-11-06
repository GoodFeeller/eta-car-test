import { Meta, StoryObj } from '@storybook/react'
import ChartContent from '../components/chart/chart-content/ChartContent'
const meta: Meta<typeof ChartContent> = {
  component: ChartContent,
}

export default meta
type Story = StoryObj<typeof ChartContent>
export const Loading: Story = {
  args: {
    history: [],
    setLoading: () => false,
    loading: false,
  },
}
export const WithoutData: Story = {
  args: {
    history: [],
    setLoading: () => true,
    loading: true,
  },
}
export const WithData: Story = {
  args: {
    history: [
      {
        priceUsd: '20769.0494134645551845',
        date: '1667779220000',
      },
      {
        priceUsd: '20768.0494134645551845',
        date: '1667779240000',
      },
      {
        priceUsd: '20767.0494134645551845',
        date: '1667779260000',
      },
      {
        priceUsd: '20769.8494134645551845',
        date: '1667779280000',
      },
      {
        priceUsd: '20769.5494134645551845',
        date: '1667779300000',
      },
      {
        priceUsd: '20769.2494134645551845',
        date: '1667779320000',
      },
      {
        priceUsd: '20769.9494134645551845',
        date: '1667779340000',
      },
      {
        priceUsd: '20769.1494134645551845',
        date: '1667779360000',
      },
      {
        priceUsd: '20767.0494134645551845',
        date: '1667779380000',
      },
    ],
    setLoading: () => true,
    loading: true,
  },
}
