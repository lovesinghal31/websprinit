import React from 'react'
import Card from '../ui/Card'
import KanishkaTiwari from '../assets/KanishkaTiwari.png'
import MustafaAzad from '../assets/MustafaAzad.png'
import DeepakKumarshah from '../assets/DeepakKumarshah.jpg'

function Mentor() {
  return (
    <>
    <div className='flex justify-center'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
        {teamData.map((details,index)=>(
          <Card key={index} {...details} />
        ))}
    </div>
    </div>
    </>
  )
}

export default Mentor

const teamData = [
    {
        imgLink: 'https://res.cloudinary.com/dhwbs4kk2/image/upload/v1707244174/vjsirimg_amfjkz.jpg',
        memberName: "Vaibhav Jain" ,
        role: "GDG Faculty Advisor", 
        linkedIN: "",
    },
    {
        imgLink: KanishkaTiwari,
        memberName: "Kanishk Tiwari" ,
        role: "Full Stack and UI Lead", 
        linkedIN: "https://www.linkedin.com/in/whykanishk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        imgLink: MustafaAzad,
        memberName: "Mustafa Azad" ,
        role: "Cloud Lead", 
        linkedIN: "https://www.linkedin.com/in/harsh-hingve-a9517b1b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app%0a",
    },
    {
        imgLink: DeepakKumarshah,
        memberName: "Deepak Kumar Shah" ,
        role: "AppDev and Events Lead", 
        linkedIN: "",
    },
]