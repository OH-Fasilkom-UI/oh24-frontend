import { Meta } from '@storybook/react'
import { SquareCheckBig } from 'lucide-react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
}

export default meta

export const Main = () => (
  <div className="flex flex-col space-y-2">
    <Modal
      trigger={<Button>Default</Button>}
      icon={SquareCheckBig}
      title="Heading"
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
    </Modal>
    <Modal
      trigger={<Button>With one button</Button>}
      icon={SquareCheckBig}
      title="Heading"
      buttons={[<Modal.Button key={0}>Ok</Modal.Button>]}
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
    </Modal>
    <Modal
      trigger={<Button>With two buttons</Button>}
      icon={SquareCheckBig}
      title="Heading"
      buttons={[
        <Modal.Button key={0} closeOnClick>
          Yes
        </Modal.Button>,
        <Modal.Button key={1} closeOnClick variant="secondary">
          No
        </Modal.Button>,
      ]}
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
    </Modal>
    <Modal
      trigger={<Button>Hide close</Button>}
      icon={SquareCheckBig}
      title="Heading"
      hideClose
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
    </Modal>
  </div>
)
