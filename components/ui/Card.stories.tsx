import { Meta } from '@storybook/react'
import Card from './Card'
import Button from './Button'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
}

export default meta

export const Main = () => (
  <div className="flex flex-col space-y-2">
    <Card title="Lorem" className="max-w-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui enim,
      euismod non laoreet eu, sodales nec eros. Ut in ligula ut lacus egestas
      commodo. Duis gravida nunc in augue finibus, ut semper ligula imperdiet.
      Maecenas mattis accumsan nisi, a aliquam lectus posuere vestibulum. Morbi
      a magna purus. Ut erat orci, fringilla in eros ut, placerat ornare nisl.
      Mauris in varius lacus. Etiam ac hendrerit mi. Suspendisse in semper
      dolor. Etiam tempus tortor sit amet elit pellentesque, et accumsan tortor
      varius. Pellentesque feugiat faucibus tempus. Sed suscipit quis arcu sed
      mollis. Donec non ligula est. Nam suscipit eget sem a.
    </Card>
    <Card
      title="Lorem"
      buttons={[<Button>Register</Button>]}
      className="max-w-lg"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui enim,
      euismod non laoreet eu, sodales nec eros. Ut in ligula ut lacus egestas
      commodo. Duis gravida nunc in augue finibus, ut semper ligula imperdiet.
      Maecenas mattis accumsan nisi, a aliquam lectus posuere vestibulum. Morbi
      a magna purus. Ut erat orci, fringilla in eros ut, placerat ornare nisl.
      Mauris in varius lacus. Etiam ac hendrerit mi. Suspendisse in semper
      dolor. Etiam tempus tortor sit amet elit pellentesque, et accumsan tortor
      varius. Pellentesque feugiat faucibus tempus. Sed suscipit quis arcu sed
      mollis. Donec non ligula est. Nam suscipit eget sem a.
    </Card>
    <Card
      title="Lorem"
      buttons={[
        <Button variant="secondary">Register</Button>,
        <Button>Register</Button>,
      ]}
      className="max-w-lg"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui enim,
      euismod non laoreet eu, sodales nec eros. Ut in ligula ut lacus egestas
      commodo. Duis gravida nunc in augue finibus, ut semper ligula imperdiet.
      Maecenas mattis accumsan nisi, a aliquam lectus posuere vestibulum. Morbi
      a magna purus. Ut erat orci, fringilla in eros ut, placerat ornare nisl.
      Mauris in varius lacus. Etiam ac hendrerit mi. Suspendisse in semper
      dolor. Etiam tempus tortor sit amet elit pellentesque, et accumsan tortor
      varius. Pellentesque feugiat faucibus tempus. Sed suscipit quis arcu sed
      mollis. Donec non ligula est. Nam suscipit eget sem a.
    </Card>
  </div>
)
