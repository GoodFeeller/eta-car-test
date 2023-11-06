import { Meta, StoryObj } from '@storybook/react'
import TableHeader from '../components/coin-table/table-header/TableHeader'
const meta: Meta<typeof TableHeader> = {
  component: TableHeader,
  decorators: [
    (Story) => (
      <table
        style={{
          display: 'flex',
          width: '50vw',
          justifyContent: 'space-around',
        }}
      >
        <Story />
      </table>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TableHeader>
export const WithSort: Story = {
  args: {
    setSort: () => null,
    sort: {
      property: 'changePercent24Hr',
      to: 'down',
    },
  },
}
