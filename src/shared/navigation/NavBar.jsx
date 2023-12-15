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
                toast.info('you have successfully logged out');

            })
            .catch(error => {
                toast.warn(error.message);
            })
    }
    const handleSignin = () => {
        navigate('/login');
    }
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
                {user ?
                    <div className='flex gap-2'>
                        <div className="w-10">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-full' />
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