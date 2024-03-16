import './Offcanvas.css'
import { PiArrowFatLineRightFill } from "react-icons/pi";
import Logo from '../Logo/Logo.jsx'
import { AiFillDashboard } from "react-icons/ai";


const Offcanvas = ({ toggle, setToggle }) => {
    return (
        <>
            <div className={`${toggle} canvas`}>
            <Logo />
                <ul className='ul_tag'>
                    <li className='ABC'><a href=""><AiFillDashboard className='lg'/>&nbsp;Dashboard</a></li>
                    <li className='ABC'><a href=""><PiArrowFatLineRightFill className='lg'/>&nbsp;Logout</a></li>
                </ul>
                <div className='btn-primary'>
                    <button className='btn' onClick={() => setToggle(!toggle)}><i className="fa-solid fa-arrow-left"></i></button>
                </div>
            </div> 
        </>
    )
}

export default Offcanvas
