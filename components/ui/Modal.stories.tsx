import { Meta } from '@storybook/react'
import { SquareCheckBig } from 'lucide-react'
import Modal from './Modal'
import Button from './Button'

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
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui enim, euismod non laoreet eu, sodales nec eros. Ut in ligula ut lacus egestas commodo. Duis gravida nunc in augue finibus, ut semper ligula imperdiet. Maecenas mattis accumsan nisi, a aliquam lectus posuere vestibulum. Morbi a magna purus. Ut erat orci, fringilla in eros ut, placerat ornare nisl. Mauris in varius lacus. Etiam ac hendrerit mi. Suspendisse in semper dolor. Etiam tempus tortor sit amet elit pellentesque, et accumsan tortor varius. Pellentesque feugiat faucibus tempus. Sed suscipit quis arcu sed mollis. Donec non ligula est. Nam suscipit eget sem a."
    />
    <Modal
      trigger={<Button>Default wide</Button>}
      icon={SquareCheckBig}
      title="Heading"
      wide
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui enim, euismod non laoreet eu, sodales nec eros. Ut in ligula ut lacus egestas commodo. Duis gravida nunc in augue finibus, ut semper ligula imperdiet. Maecenas mattis accumsan nisi, a aliquam lectus posuere vestibulum. Morbi a magna purus. Ut erat orci, fringilla in eros ut, placerat ornare nisl. Mauris in varius lacus. Etiam ac hendrerit mi. Suspendisse in semper dolor. Etiam tempus tortor sit amet elit pellentesque, et accumsan tortor varius. Pellentesque feugiat faucibus tempus. Sed suscipit quis arcu sed mollis. Donec non ligula est. Nam suscipit eget sem a."
    />
    <Modal
      trigger={<Button>With one button</Button>}
      icon={SquareCheckBig}
      title="Heading"
      buttons={[<Modal.Button>Ok</Modal.Button>]}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui enim, euismod non laoreet eu, sodales nec eros. Ut in ligula ut lacus egestas commodo. Duis gravida nunc in augue finibus, ut semper ligula imperdiet. Maecenas mattis accumsan nisi, a aliquam lectus posuere vestibulum. Morbi a magna purus. Ut erat orci, fringilla in eros ut, placerat ornare nisl. Mauris in varius lacus. Etiam ac hendrerit mi. Suspendisse in semper dolor. Etiam tempus tortor sit amet elit pellentesque, et accumsan tortor varius. Pellentesque feugiat faucibus tempus. Sed suscipit quis arcu sed mollis. Donec non ligula est. Nam suscipit eget sem a."
    />
    <Modal
      trigger={<Button>With one button wide</Button>}
      icon={SquareCheckBig}
      title="Heading"
      wide
      buttons={[<Modal.Button>Ok</Modal.Button>]}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui enim, euismod non laoreet eu, sodales nec eros. Ut in ligula ut lacus egestas commodo. Duis gravida nunc in augue finibus, ut semper ligula imperdiet. Maecenas mattis accumsan nisi, a aliquam lectus posuere vestibulum. Morbi a magna purus. Ut erat orci, fringilla in eros ut, placerat ornare nisl. Mauris in varius lacus. Etiam ac hendrerit mi. Suspendisse in semper dolor. Etiam tempus tortor sit amet elit pellentesque, et accumsan tortor varius. Pellentesque feugiat faucibus tempus. Sed suscipit quis arcu sed mollis. Donec non ligula est. Nam suscipit eget sem a."
    />
    <Modal
      trigger={<Button>With two buttons</Button>}
      icon={SquareCheckBig}
      title="Heading"
      buttons={[
        <Modal.Button closeOnClick>Yes</Modal.Button>,
        <Modal.Button closeOnClick variant="secondary">
          No
        </Modal.Button>,
      ]}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui enim, euismod non laoreet eu, sodales nec eros. Ut in ligula ut lacus egestas commodo. Duis gravida nunc in augue finibus, ut semper ligula imperdiet. Maecenas mattis accumsan nisi, a aliquam lectus posuere vestibulum. Morbi a magna purus. Ut erat orci, fringilla in eros ut, placerat ornare nisl. Mauris in varius lacus. Etiam ac hendrerit mi. Suspendisse in semper dolor. Etiam tempus tortor sit amet elit pellentesque, et accumsan tortor varius. Pellentesque feugiat faucibus tempus. Sed suscipit quis arcu sed mollis. Donec non ligula est. Nam suscipit eget sem a."
    />
    <Modal
      trigger={<Button>With two buttons wide</Button>}
      icon={SquareCheckBig}
      title="Heading"
      wide
      buttons={[
        <Modal.Button closeOnClick>Yes</Modal.Button>,
        <Modal.Button closeOnClick variant="secondary">
          No
        </Modal.Button>,
      ]}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui enim, euismod non laoreet eu, sodales nec eros. Ut in ligula ut lacus egestas commodo. Duis gravida nunc in augue finibus, ut semper ligula imperdiet. Maecenas mattis accumsan nisi, a aliquam lectus posuere vestibulum. Morbi a magna purus. Ut erat orci, fringilla in eros ut, placerat ornare nisl. Mauris in varius lacus. Etiam ac hendrerit mi. Suspendisse in semper dolor. Etiam tempus tortor sit amet elit pellentesque, et accumsan tortor varius. Pellentesque feugiat faucibus tempus. Sed suscipit quis arcu sed mollis. Donec non ligula est. Nam suscipit eget sem a."
    />
    <Modal
      trigger={<Button>Hide close</Button>}
      icon={SquareCheckBig}
      title="Heading"
      hideClose
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui enim, euismod non laoreet eu, sodales nec eros. Ut in ligula ut lacus egestas commodo. Duis gravida nunc in augue finibus, ut semper ligula imperdiet. Maecenas mattis accumsan nisi, a aliquam lectus posuere vestibulum. Morbi a magna purus. Ut erat orci, fringilla in eros ut, placerat ornare nisl. Mauris in varius lacus. Etiam ac hendrerit mi. Suspendisse in semper dolor. Etiam tempus tortor sit amet elit pellentesque, et accumsan tortor varius. Pellentesque feugiat faucibus tempus. Sed suscipit quis arcu sed mollis. Donec non ligula est. Nam suscipit eget sem a."
    />
    <Modal
      trigger={<Button>Hide close wide</Button>}
      icon={SquareCheckBig}
      title="Heading"
      wide
      hideClose
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui enim, euismod non laoreet eu, sodales nec eros. Ut in ligula ut lacus egestas commodo. Duis gravida nunc in augue finibus, ut semper ligula imperdiet. Maecenas mattis accumsan nisi, a aliquam lectus posuere vestibulum. Morbi a magna purus. Ut erat orci, fringilla in eros ut, placerat ornare nisl. Mauris in varius lacus. Etiam ac hendrerit mi. Suspendisse in semper dolor. Etiam tempus tortor sit amet elit pellentesque, et accumsan tortor varius. Pellentesque feugiat faucibus tempus. Sed suscipit quis arcu sed mollis. Donec non ligula est. Nam suscipit eget sem a."
    />
  </div>
)
