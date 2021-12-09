import { Button, SlideOver } from '../../components'
import { useState } from 'react'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

const SlideOverPreview = () => {
  const [showSlideOver, setShowSlideOver] = useState(false)

  return (
    <ComponentWrapper
      component={{
        name: 'SlideOver',
        to: '/components/slide-over',
        current: true,
      }}
    >
      <Button
        type="button"
        buttonType={Button.buttonType.secondary}
        onClick={() => {
          setShowSlideOver(true)
        }}
      >
        Show Slideover
      </Button>
      <SlideOver show={showSlideOver} setShow={setShowSlideOver} />
    </ComponentWrapper>
  )
}

export default SlideOverPreview
