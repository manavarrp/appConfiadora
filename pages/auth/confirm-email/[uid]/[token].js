import React from 'react'
import Activate from '../../../../components/auth/Activate'

const ActivateEmail = () => {
  return (
    <>
      <Activate />
    </>
  )
}

export default ActivateEmail

ActivateEmail.getLayout = function PageLayout (page) {
  return <>{page}</>
}
