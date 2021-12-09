import { CheckboxGroup } from '../../components'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

const CheckboxGroupPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'CheckboxGroup',
        to: '/components/checkbox-group',
        current: true,
      }}
    >
      <CheckboxGroup />
    </ComponentWrapper>
  )
}

export default CheckboxGroupPreview
