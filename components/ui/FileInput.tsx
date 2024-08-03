import Image from 'next/image'
import React, { useCallback } from 'react'
import { useDropzone, DropzoneInputProps } from 'react-dropzone'
import { twMerge } from 'tailwind-merge'
import { Trash2 } from 'lucide-react'
import { toast } from './Toast'
import Stack from './Stack'

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

const DeleteFileButton = ({ resetFile }: DeleteFileButtonProps) => {
  return (
    <button
      onClick={resetFile}
      className="flex justify-center items-center w-[36px] h-[36px] rounded-full bg-BlueRegion/Portgage/50 text-BlueRegion/Portgage/400"
    >
      <Trash2 width={24} height={24} />
    </button>
  )
}

const UploadedElement = ({ file, setFile }: UploadedElementProps) => {
  const resetFile = () => {
    setFile(null)
  }

  return (
    <Stack>
      <div className="flex justify-end items-start z-20 p-2">
        <DeleteFileButton resetFile={resetFile} />
      </div>

      <div className="flex flex-col gap-2 justify-center items-center text-center px-[40px] py-[25px]">
        <div className="flex flex-col items-center gap-1">
          <Image
            src={'/PandaSuccess.png'}
            alt=""
            width={152}
            height={117.81}
            className="dark:hidden"
          />
        </div>

        <div className="flex flex-col gap-[5px] text-BlueRegion/Portgage/700">
          <p className="font-bold">
            File telah{' '}
            <span className="text-RedRegion/DarkBurgundy/400">terupload</span>!
          </p>
          <p className="text-sm font-normal">{file.name}</p>
        </div>
      </div>
    </Stack>
  )
}

const NotUploadedElement = ({ secondaryMessage }: NotUploadedElementProps) => {
  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center p-6">
        <div className="flex items-end">
          <Image src={'/PandaUpload.png'} alt="" width={172} height={120} />
        </div>

        <div className="flex flex-col gap-1 text-BlueRegion/Portgage/700">
          <p className="font-bold text-center">
            Drag atau{' '}
            <span className="text-RedRegion/DarkBurgundy/400">upload</span> file
            kamu di sini!
          </p>
          {secondaryMessage && (
            <p className="text-sm text-center font-normal ">
              {secondaryMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

const FileInput = ({
  file,
  setFile,
  className,
  secondaryMessage,
  maxSizeInByte = 5 * 1024 * 1024,
}: DropzoneProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    if (file.size > maxSizeInByte) {
      toast.error('File size exceeded.')
      return
    }

    setFile(file)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'application/zip': ['.zip'],
      'application/pdf': ['.pdf'],
    },
  })

  return (
    <div
      className={twMerge(
        'p-4 bg-BlueRegion/Cornflower/50 shadow-[0_0_20px_0_rgba(31,82,229,0.40)] dark:shadow-[0_0_20px_0_rgba(251,251,251,0.40)] rounded-[20px] max-w-[594px] font-sans',
        className
      )}
    >
      <div
        {...getRootProps()}
        className={`bg-[#FBFBFB] h-full p-3  border-[2px] border-dashed cursor-pointer flex justify-center items-center rounded-xl ${
          isDragActive ? 'active' : ''
        } border-Text/TextLightBG
        `}
      >
        <input {...getInputProps()} />

        {file ? (
          <UploadedElement file={file} setFile={setFile} />
        ) : (
          <NotUploadedElement
            secondaryMessage={secondaryMessage}
            getInputProps={getInputProps}
          />
        )}
      </div>
    </div>
  )
}

export default FileInput
