import React from 'react'

import { LayoutWrapper } from '../../src/layouts/LayoutWrapper'
import TwoColumnsCardsFormLayout from '../../src/layouts/TwoColumnsCardsFormLayout/TwoColumnsCardsFormLayout'

const TwoColumnsCardsFormLayoutPreview: React.FC<any> = () => {
  return (
    <LayoutWrapper
      layout={{
        name: 'Two Column Cards Form',
        to: '/layouts/two-columns-cards-form',
        current: true,
      }}
    >
      <TwoColumnsCardsFormLayout />
    </LayoutWrapper>
  )
}

export default TwoColumnsCardsFormLayoutPreview
