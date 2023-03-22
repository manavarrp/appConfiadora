import React from 'react'
import Recovery from '../../../../components/auth/Recovery'

const ConfirmPassword = () => {
  return (
    <>
      <Recovery />
    </>
  )
}

export default ConfirmPassword

ConfirmPassword.getLayout = function PageLayout (page) {
  return <>{page}</>
}
