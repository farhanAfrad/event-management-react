import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
    // creating link as some of the link will be in dynamic use
    const link = <>
        <li><NavLink to='/' className='py-1 px-3'>Home</NavLink></li>
        <li><NavLink to='/registration' className='py-1 px-3'>Registration</NavLink></li>
        <li><NavLink to='/login' className='py-1 px-3'>Login</NavLink></li>
    </>
    return (
            <div className="flex flex-col md:flex-row justify-between w-full items-center">
                {/* logo */}
                <div className='text-4xl font-extrabold text-white '>EVANTO</div>
                {/* MENU */}
                <div id='link01'>
                    <ul className='flex md:gap-4 text-white font-medium text-lg'>
                        {link}
                    </ul>
                </div>
                {/*user*/}
                <div>
                    <button className='bg-[#3e3e3e] py-1 px-5 text-white active:scale-90 transition-transform text-lg font-medium'>Signin</button>
                </div>
            </div>
    );
};

export default NavBar;