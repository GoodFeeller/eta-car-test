import { Meta, StoryObj } from '@storybook/react'
import Loading from '../components/loading/Loading'
const meta: Meta<typeof Loading> = {
  component: Loading,
}

export default meta
type Story = StoryObj<typeof Loading>
export const FirstStory: Story = {}
