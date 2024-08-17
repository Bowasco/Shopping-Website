import React from 'react'
import JumiaLogo from "../../Images/Jumia-Logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='bg-gray-400'>
            <div className='flex justify-between px-20 py-3'>
                <div className='content-center'>
                    <Link to={"/"}> <img src={JumiaLogo} width={130} alt="" /></Link>
                </div>
                <div>
                    <h1>
                        <Link to={"/AddProduct"}>Add Products</Link>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar