import { Container, Divider } from '../components'

import ComponentsSection from '../src/sections/ComponentsSection'
import LayoutsSection from '../src/sections/LayoutsSection'
import PagesSection from '../src/sections/PagesSection'

const HomePage = () => {
  return (
    <Container className="py-10">
      <ComponentsSection />
      <Divider className="my-10" />
      <LayoutsSection />
      <Divider className="my-10" />
      <PagesSection />
    </Container>
  )
}

export default HomePage
