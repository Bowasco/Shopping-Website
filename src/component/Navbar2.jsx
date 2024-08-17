import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import JumiaLogo from "../Images/Jumia-Logo.png"
import { Link } from "react-router-dom";

const Navbar2 = () => {
    return (
        <div className='bg-gray-400'>
            <div className='flex justify-between px-20 py-3'>
                <div className='content-center'>
                    <img src={JumiaLogo} width={130} alt="" />
                </div>
                <div>
                    <FaCartPlus style={{fontSize: '30'}}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar2