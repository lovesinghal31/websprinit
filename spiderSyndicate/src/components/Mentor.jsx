import React from 'react'
import Card from '../ui/Card'

function Mentor() {
  return (
    <>
        {teamData.map((details,index)=>(
        <Card key={index} {...details} />
      ))}
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
        imgLink: 'https://1drv.ms/i/s!Ar071Tw1od3SxT4B_5MxRKLowACD?e=GiuMsh',
        memberName: "Rashmi Jajodia" ,
        role: "Social Media Lead", 
        linkedIN: "https://www.linkedin.com/in/rashmi-jajodia-b374bb256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        imgLink: 'https://drive.google.com/file/d/1UTxLhVaiZdGfu2IAaL-u-bBbgz-XUVje/view?usp=drivesdk',
        memberName: "Harsh Hingve" ,
        role: "Data Science & Outreach Lead", 
        linkedIN: "https://www.linkedin.com/in/harsh-hingve-a9517b1b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app%0a",
    },
    {
        imgLink: 'https://res.cloudinary.com/dhwbs4kk2/image/upload/v1707244174/vjsirimg_amfjkz.jpg',
        memberName: "Prateek Tiwari" ,
        role: "GDG F", 
        linkedIN: "",
    },
]