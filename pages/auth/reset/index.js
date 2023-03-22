import React from 'react'
import Reset from '../../../components/auth/Reset'

const reset = () => {
  return (
    <>
      <Reset />
    </>
  )
}

export default reset

reset.getLayout = function PageLayout (page) {
  return <>{page}</>
}
