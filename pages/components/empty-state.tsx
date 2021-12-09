import { EmptyState } from '../../components'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

const EmptyStatePreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'EmptyState',
        to: '/components/empty-state',
        current: true,
      }}
    >
      <EmptyState />
    </ComponentWrapper>
  )
}

export default EmptyStatePreview
