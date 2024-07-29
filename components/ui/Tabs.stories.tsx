import { Meta } from '@storybook/react'
import Tabs from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
}

export default meta

export const Main = () => (
  <Tabs>
    <Tabs.List>
      <Tabs.Trigger value="account">Account</Tabs.Trigger>
      <Tabs.Trigger value="password">Password</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="account">Hello, World</Tabs.Content>
    <Tabs.Content value="password">Hello, Mom</Tabs.Content>
  </Tabs>
)
