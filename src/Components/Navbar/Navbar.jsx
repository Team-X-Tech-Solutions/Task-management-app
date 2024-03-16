import React from 'react'
import './Navbar.css'
import abc from '../Assets/Untitled design.png'

const Navbar = ({ toggle, setToggle }) => {
    return (
        <>
            <div className='navbar'>
                <div className='Burger'>
                    <i onClick={() => setToggle(!toggle)} className="fa-solid fa-bars"></i>
                    <img src={abc} alt="image" className='image' />
                </div>
            </div>
        </>
    )
}

export default Navbar
