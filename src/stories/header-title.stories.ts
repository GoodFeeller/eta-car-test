import { Meta, StoryObj } from '@storybook/react'
import HeaderTitle from '../components/header/header-title/HeaderTitle'
const meta: Meta<typeof HeaderTitle> = {
  component: HeaderTitle,
}

export default meta
type Story = StoryObj<typeof HeaderTitle>
export const FirstStory: Story = {}
