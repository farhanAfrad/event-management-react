import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const NavBar = () => {
    const { user, logout, loader } = useContext(AuthContext);
    const navigate = useNavigate();
    // creating link as some of the link will be in dynamic use
    const link = <>
        <li><NavLink to='/' className='py-1 px-3'>Home</NavLink></li>
        <li><NavLink to='/registration' className='py-1 px-3'>Registration</NavLink></li>
        <li><NavLink to='/login' className='py-1 px-3'>Login</NavLink></li>
        {
            user && <>
                <li>
                    <NavLink to='/profile' className='py-1 px-3'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/yourservices' className='py-1 px-3'>Your Services</NavLink>
                </li>
            </>
        }

    </>
    const handleLogout = () => {
        logout()
            .then(() => {
            })
            .catch(error => {
                toast.warn(error.message);
            })
    }
    const handleSignin = () => {
        navigate('/login');
    }
    return (
        <div className="flex justify-between items-center py-5 md:py-0">
            {/* logo */}
            <div className='text-4xl font-extrabold text-white hidden lg:block'>EVANTOo</div>
            {/* MENU */}
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
                    {link}
                </ul>
            </div>
            <div id='link01'className=' hidden lg:flex'>
                <ul className='flex text-white font-medium text-lg'>
                    {link}
                </ul>
            </div>
            {/*user*/}
            <div>
                {user ?
                    <div className='flex gap-3 items-center'>
                        <p className='text-white'>{user.displayName}</p>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="w-10">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-full' />
                            </div>

                        </div>
                        <button onClick={handleLogout} className='bg-[#757575] py-1 px-5 text-white active:scale-90 transition-transform text-lg font-medium'>Logout</button>
                    </div> :
                    <button onClick={handleSignin} className='bg-[#3e3e3e] py-1 px-5 text-white active:scale-90 transition-transform text-lg font-medium'>Signin</button>
                }

            </div>
        </div>
    );
};

export default NavBar;