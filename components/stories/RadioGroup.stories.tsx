import { Meta } from '@storybook/react'
import Checkbox from '../ui/Checkbox'
import RadioGroup from '../ui/RadioGroup'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/RadioGroup',
}

export default meta

export const NormalDark = () => (
  <RadioGroup size="normal" color="dark">
    <RadioGroup.Item value="hello" id="hello">
      Hello
    </RadioGroup.Item>
    <RadioGroup.Item value="hi" id="hi">
      Hi
    </RadioGroup.Item>
    <RadioGroup.Item value="whats-up" id="whats-up">
      What&apos;s up
    </RadioGroup.Item>
  </RadioGroup>
)

export const NormalLight = () => (
  <RadioGroup size="normal" color="light">
    <RadioGroup.Item value="hello" id="hello">
      Hello
    </RadioGroup.Item>
    <RadioGroup.Item value="hi" id="hi">
      Hi
    </RadioGroup.Item>
    <RadioGroup.Item value="whats-up" id="whats-up">
      What&apos;s up
    </RadioGroup.Item>
  </RadioGroup>
)

export const SmallDark = () => (
  <RadioGroup size="small" color="dark">
    <RadioGroup.Item value="hello" id="hello">
      Hello
    </RadioGroup.Item>
    <RadioGroup.Item value="hi" id="hi">
      Hi
    </RadioGroup.Item>
    <RadioGroup.Item value="whats-up" id="whats-up">
      What&apos;s up
    </RadioGroup.Item>
  </RadioGroup>
)

export const SmallLight = () => (
  <RadioGroup size="small" color="light">
    <RadioGroup.Item value="hello" id="hello">
      Hello
    </RadioGroup.Item>
    <RadioGroup.Item value="hi" id="hi">
      Hi
    </RadioGroup.Item>
    <RadioGroup.Item value="whats-up" id="whats-up">
      What&apos;s up
    </RadioGroup.Item>
  </RadioGroup>
)
