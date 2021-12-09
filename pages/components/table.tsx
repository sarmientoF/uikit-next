import { Table } from '../../components'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

const TablePreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'Table',
        to: '/components/table',
        current: true,
      }}
    >
      <Table />
    </ComponentWrapper>
  )
}

export default TablePreview
