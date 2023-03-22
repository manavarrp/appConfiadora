import React from 'react'
import LoginWithCode from '../../components/auth/LoginWithCode'

const loginWithCode = () => {
  return (
    <>
      <LoginWithCode />
    </>
  )
}

export default loginWithCode

loginWithCode.getLayout = function PageLayout (page) {
  return <>{page}</>
}
