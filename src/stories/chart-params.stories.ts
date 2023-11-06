import { Meta, StoryObj } from '@storybook/react'
import ChartParams from '../components/chart/chart-params/ChartParams'
import { string } from 'prop-types'
const meta: Meta<typeof ChartParams> = {
  component: ChartParams,
}

export default meta
type Story = StoryObj<typeof ChartParams>
export const Primary: Story = {
  args: {
    setNewInterval: () => string,
    interval: 'd1',
  },
}
