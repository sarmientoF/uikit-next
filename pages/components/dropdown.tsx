import { Dropdown } from '../../components'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

const DropdownPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'Dropdown',
        to: '/components/dropdown',
        current: true,
      }}
    >
      <div className="flex justify-end">
        <Dropdown />
      </div>
    </ComponentWrapper>
  )
}

export default DropdownPreview
