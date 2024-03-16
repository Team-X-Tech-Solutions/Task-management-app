import React from 'react'
import { FaRegBuilding } from "react-icons/fa";
import './Logo.css'

const Logo = () => {
  return (
    <>
        <div className='Logo'>
            <FaRegBuilding className='logo'/>
            <div className='company'>
                COMPANY <sup>SAAS</sup>
            </div>
        </div>
    </>
  )
}

export default Logo
