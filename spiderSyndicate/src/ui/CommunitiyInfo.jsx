import React from 'react'

function CommunitiyInfo() {
    return (
        <>
            <div className='text-2xl text-center'>
                <span>At&nbsp;</span>
                <span>
                    <span className='text-[#4285F4]'>G</span>
                    <span className='text-[#EA4335]'>o</span>
                    <span className='text-[#FBBC05]'>o</span>
                    <span className='text-[#4285F4]'>g</span>
                    <span className='text-[#34A853]'>l</span>
                    <span className='text-[#EA4335]'>e</span>
                </span>
                <span>&nbsp;Student Developer Club IET-DAVV</span>
            </div>
            <div className='text-center font-bold'>
                <span className='text-3xl'>We Develop Communities</span>
            </div>
            <div className='w-full'>
                <img className='w-full' src="https://gdsc.ietdavv.edu.in/_next/image?url=%2Ffelicitation-group-crop.jpg&w=1080&q=75" alt="com" />
            </div>
            <div className='p-4'>
                <div className='flex flex-col justify-start items-start'>
                    <h2 className='text-2xl font-bold'>Our Mission</h2>
                    <p className='text-[16px]'>We're built different, so we build different. Our
                        mission is to empower future developers by
                        bringing students passionate about technology
                        together and helping them grow their skills in tech,
                        regardless of background.</p>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <h2 className='text-2xl font-bold'>Our Values</h2>
                    <p className='text-[16px]'>We believe you don't need to code to be a
                    developer. We develop both products and people
                    by making Google technologies accessible to
                    everyone through workshops, events, and more.
                    Dreamers, problem solvers, and tinkerers: That's
                    who we are.</p>
                </div>
            </div>
        </>
    )
}

export default CommunitiyInfo
