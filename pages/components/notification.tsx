import { useState } from 'react'

import { Button, Notification } from '../../components'
import { ComponentWrapper } from '../../src/layouts/ComponentWrapper'

const NotificationPreview = () => {
  const [showNotification, setShowNotification] = useState(true)
  return (
    <ComponentWrapper
      component={{
        name: 'Notification',
        to: '/components/notification',
        current: true,
      }}
    >
      <Button
        type="button"
        buttonType={Button.buttonType.secondary}
        onClick={() => {
          setShowNotification(true)
        }}
      >
        Show Notification
      </Button>
      <Notification show={showNotification} setShow={setShowNotification} />
    </ComponentWrapper>
  )
}

export default NotificationPreview
