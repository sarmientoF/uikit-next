import React from 'react'
import { Divider } from '../../components'

import { LayoutWrapper } from '../../src/layouts/LayoutWrapper'

const DividerPreview: React.FC<any> = () => {
  return (
    <LayoutWrapper
      layout={{
        name: 'Divider',
        to: '/layouts/divider',
        current: true,
      }}
    >
      <Divider />
    </LayoutWrapper>
  )
}

export default DividerPreview
