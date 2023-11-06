import { Meta, StoryObj } from '@storybook/react'
import AddCoinModal from '../components/modal/add-coin-modal/AddCoinModal'
import { AddContext } from '../providers/AddContext'
import { ICoin } from '../types/ICoin'
import { FunctionComponent, ReactNode } from 'react'
const AddProvider: FunctionComponent<{
  addOptions: ICoin | null
  children: ReactNode
}> = ({ addOptions, children }) => {
  const setCoin = () => null
  return (
    <AddContext.Provider value={{ coin: addOptions, setCoin }}>
      {children}
    </AddContext.Provider>
  )
}
const meta: Meta<typeof AddCoinModal> = {
  component: AddCoinModal,
  parameters: {
    addOptions: {
      id: 'bitcoin',
    },
  },
}

export default meta
type Story = StoryObj<typeof AddCoinModal>
export const Full: Story = {
  decorators: [
    (Story) => (
      <AddProvider
        addOptions={{
          id: 'bitcoin',
          name: 'Bitcoin',
          rank: '1',
          priceUsd: '20000',
          symbol: 'BTC',
          supply: '200',
          maxSupply: '200000',
          marketCapUsd: '2000000000',
          changePercent24Hr: '2',
        }}
      >
        <Story />
      </AddProvider>
    ),
  ],
}
export const Empty: Story = {
  decorators: [
    (Story) => (
      <AddProvider addOptions={null}>
        <Story />
      </AddProvider>
    ),
  ],
}
