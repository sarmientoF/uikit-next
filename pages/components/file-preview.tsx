import { Input } from '../../components'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

const FilePreviewPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'FilePreview',
        to: '/components/file-preview',
        current: true,
      }}
    >
      <Input.File />
    </ComponentWrapper>
  )
}

export default FilePreviewPreview
