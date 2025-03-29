import React from 'react'
import { Link } from 'react-router-dom'

function BasicGrid() {
  return (
    <>
      <div className='flex gap-50 w-full'>
      <div className='w-[50%] p-3' >
          <h1 className='text-2xl' >Quick Links</h1>
          <h1 className='p-2 text-xl' ><Link to={'eventgallery'}>Events Gallery</Link></h1>
          <h1 className='p-2 text-xl' ><Link to={'mentor'}>Mentor</Link></h1>
          <h1 className='p-2 text-xl' ><a href="#">FAQ</a></h1>
        </div>
        <div className='w-[50%] p-3' >
          <h1 className='text-2xl' >Community and Support</h1>
          <h1 className='p-2 text-xl' ><a href="#">Guidelines</a></h1>
          <h1 className='p-2 text-xl' ><a href="#">Support</a></h1>
          <h1 className='p-2 text-xl' ><a href="#">Safety</a></h1>
        </div>
      </div>
    </>
  )
}

export default BasicGrid