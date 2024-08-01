import * as React from 'react'
import FileInput from '../ui/FileInput'

export default {
  title: 'Components/FileInput'
}

export const Main = () => {
  const [file, setFile] = React.useState<File | null>(null)
  return <FileInput file={file} setFile={setFile} />
}
