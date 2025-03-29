import React from 'react'

function BasicGrid() {
  return (
    <>
      <div className='flex gap-50 w-full'>
      <div className='w-[50%] p-3' >
          <h1 className='text-2xl' >Quick Links</h1>
          <h1 className='p-2 text-xl' >About</h1>
          <h1 className='p-2 text-xl' >Domain</h1>
          <h1 className='p-2 text-xl' >FAQ</h1>
        </div>
        <div className='w-[50%] p-3' >
          <h1 className='text-2xl' >Community and Support</h1>
          <h1 className='p-2 text-xl' >Guidelines</h1>
          <h1 className='p-2 text-xl' >Help and Support</h1>
          <h1 className='p-2 text-xl' >Safety</h1>
        </div>
      </div>
    </>
  )
}

export default BasicGrid