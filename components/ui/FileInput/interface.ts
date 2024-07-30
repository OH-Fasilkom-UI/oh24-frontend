import { DropzoneInputProps } from 'react-dropzone'

export interface DeleteFileButtonProps {
  resetFile: () => void
}

export interface UploadedElementProps {
  file: File
  setFile: React.Dispatch<React.SetStateAction<File | null>>
}

export interface NotUploadedElementProps {
  secondaryMessage?: string
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T
}

export interface DropzoneProps {
  file: File | null
  setFile: React.Dispatch<React.SetStateAction<File | null>>
  className?: string
  secondaryMessage?: string
  maxSizeInByte?: number
}
