import { Meta, StoryObj } from '@storybook/react'
import SearchCoin from '../components/coin-table/search-coin/SearchCoin'
import { FunctionComponent, PropsWithChildren, useState } from 'react'
const meta: Meta<typeof SearchCoin> = {
  component: SearchCoin,
}

export default meta
type Story = StoryObj<typeof SearchCoin>
export const Empty: Story = {
  args: {
    search: '',
    setSearch: () => null,
  },
}
export const WithText: Story = {
  args: {
    search: 'bitcoin',
    setSearch: () => null,
  },
}
