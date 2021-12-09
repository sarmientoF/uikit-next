import { SelectMenu } from '../../components'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

const SelectMenuPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'SelectMenu',
        to: '/components/select-menu',
        current: true,
      }}
    >
      <SelectMenu />
    </ComponentWrapper>
  )
}

export default SelectMenuPreview
