import { ButtonGroup } from '../../components'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

const ButtonGroupPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'ButtonGroup',
        to: '/components/button-group',
        current: true,
      }}
    >
      <ButtonGroup />
    </ComponentWrapper>
  )
}

export default ButtonGroupPreview
