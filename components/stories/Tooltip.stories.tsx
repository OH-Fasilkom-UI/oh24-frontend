import { Meta } from '@storybook/react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/Tooltip'
import Button from '../ui/Button'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
}

export default meta

export const Top = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button>Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent
          title="Tooltip Title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          side="top"
        />
      </Tooltip>
    </TooltipProvider>
  </div>
)

export const Right = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button>Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent
          title="Tooltip Title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          side="right"
        />
      </Tooltip>
    </TooltipProvider>
  </div>
)

export const Bottom = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button>Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent
          title="Tooltip Title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          side="bottom"
        />
      </Tooltip>
    </TooltipProvider>
  </div>
)

export const Left = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button>Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent
          title="Tooltip Title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          side="left"
        />
      </Tooltip>
    </TooltipProvider>
  </div>
)
