import React from 'react'
import { FaLinkedin } from "react-icons/fa";

function Card({imgLink,memberName,role,linkedIn}) {
  return (
    <>
    <div className='flex flex-col justify-start items-start p-2 shadow-2xl border-2 w-[310px] rounded-2xl'>
    <img className='w-2xs rounded-2xl flex' src={imgLink} alt="sir" />
    <h1 className='flex'>{memberName}</h1>
    <h1 className='flex'>{role}</h1>
    <a href={linkedIn}><FaLinkedin/></a>
    </div>
    </>
  )
}

export default Card