import React, { useState } from 'react'
import Modal from '../components/common/Modal'

function Profile () {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button type='button' onClick={() => setOpen(true)}>CLick</button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  )
}

export default Profile

Profile.getLayout = function PageLayout (page) {
  return <>{page}</>
}
