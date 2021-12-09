import React from 'react'
import { Breadcrumb, Container } from '../../components'

import LayoutsSection from '../../src/sections/LayoutsSection'

const LayoutsPage: React.FC<any> = () => {
  return (
    <Container className="py-10">
      <Breadcrumb
        homeTo="/"
        pages={[{ name: 'Sample Layouts', to: '/layouts', current: true }]}
      />
      <div className="my-10">
        <LayoutsSection />
      </div>
    </Container>
  )
}

export default LayoutsPage
