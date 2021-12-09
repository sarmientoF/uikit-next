import { useState } from 'react'

import { Toggle } from '../../components'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

const TogglePreview = () => {
  const [enabled, setEnabled] = useState(false)
  return (
    <ComponentWrapper
      component={{
        name: 'Toggle',
        to: '/components/toggle',
        current: true,
      }}
    >
      <Toggle enabled={enabled} setEnabled={setEnabled} />
    </ComponentWrapper>
  )
}

export default TogglePreview
