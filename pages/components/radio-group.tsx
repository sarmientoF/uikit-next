import { RadioGroup } from '../../components'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

const RadioGroupPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'RadioGroup',
        to: '/components/radio-group',
        current: true,
      }}
    >
      <RadioGroup />
    </ComponentWrapper>
  )
}

export default RadioGroupPreview
