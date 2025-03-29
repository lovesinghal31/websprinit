import React from 'react'

function BasicGrid() {
  return (
    <>
      <div className='flex gap-50'>
      <div className='w-[50%] p-3' >
          <h1 className='' >Quick Links</h1>
          <h1>About</h1>
          <h1>Domain</h1>
          <h1>FAQ</h1>
        </div>
        <div className='w-[50%] p-3' >
          <h1 className='' >Community and Support</h1>
          <h1>Guidelines</h1>
          <h1>Help and Support</h1>
          <h1>Safety</h1>
        </div>
      </div>
    </>
  )
}

export default BasicGrid