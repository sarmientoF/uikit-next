import React from 'react'
import { Container } from '../../components'

import { LayoutWrapper } from '../../src/layouts/LayoutWrapper'

const ContainerPreview: React.FC<any> = () => {
  return (
    <LayoutWrapper
      layout={{
        name: 'Container',
        to: '/layouts/container',
        current: true,
      }}
    >
      <Container className="bg-gray-200 h-96 py-10">Hello World</Container>
    </LayoutWrapper>
  )
}

export default ContainerPreview
