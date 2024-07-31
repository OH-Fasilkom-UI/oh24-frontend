import { Meta } from '@storybook/react'
import Tabs from './Tabs'
import { Settings, User } from 'lucide-react'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
}

export default meta

export const Main = () => (
  <div className="flex flex-col gap-2">
    <Tabs>
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Hello, World</Tabs.Content>
      <Tabs.Content value="password">Hello, Mom</Tabs.Content>
    </Tabs>
    <Tabs>
      <Tabs.List>
        <Tabs.Trigger withNumber={1} value="account">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger withNumber={2} value="password">
          Password
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Hello, World</Tabs.Content>
      <Tabs.Content value="password">Hello, Mom</Tabs.Content>
    </Tabs>
    <Tabs>
      <Tabs.List>
        <Tabs.Trigger withIcon={User} value="account">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger withIcon={Settings} value="password">
          Password
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Hello, World</Tabs.Content>
      <Tabs.Content value="password">Hello, Mom</Tabs.Content>
    </Tabs>
    <Tabs>
      <Tabs.List withBG>
        <Tabs.Trigger withNumber={1} withIcon={User} value="account">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger withNumber={2} withIcon={Settings} value="password">
          Password
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Hello, World</Tabs.Content>
      <Tabs.Content value="password">Hello, Mom</Tabs.Content>
    </Tabs>
    <Tabs orientation="vertical">
      <Tabs.List>
        <Tabs.Trigger withNumber={1} withIcon={User} value="account">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger withNumber={2} withIcon={Settings} value="password">
          Password
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Hello, World</Tabs.Content>
      <Tabs.Content value="password">Hello, Mom</Tabs.Content>
    </Tabs>
  </div>
)
