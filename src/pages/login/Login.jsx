
import { useContext, useState } from 'react';
import NavBar from '../../shared/navigation/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";





const Login = () => {
    
    const {login,googleSignin} = useContext(AuthContext);
    const [erros,setErros] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    
    const handleSubmit = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // calling login
        login(email, password)
        .then(result =>{
            console.log(result);
            toast.success('succefully logged in',{
                autoClose:1500
            });
            if(location.state){
                setTimeout(()=>{
                    navigate(location.state)
                },3000)  
            }
            else{
                setTimeout(()=>{
                    navigate('/')
                },3000) 
            }
        })
        .catch(error =>{
            toast.warn(error.message);
            setErros('your email or password does not match!!!')
        })
    }
    // google sign in
    const handleGoogleSignin = () =>{
        googleSignin()
        .then(result =>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className='flex justify-center items-center w-full h-screen relative'>
            <div className='bg-[#3e3e3e] absolute w-full top-0 py:5 md:py-8 md:px-12 lg:px-20'>
                <NavBar></NavBar>
            </div>
            <div className='w-4/5 mt-28 lg:w-2/5 bg-[#bababa] rounded'>
                <div className="w-full">
                    <form className="card-body pb-1" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered text-xl" required name='email'/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered text-xl" required name='password'/>
                            <label className="label">
                                <a href="#" className="label-text-alt text-lg font-medium link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-1">
                            <button className='border px-5 py-3 rounded bg-[#3E3E3E] text-lg font-medium text-white active:scale-95 transition-transform'>Login</button>
                        </div>
                    </form>
                    <div className='text-center text-lg'>
                        <p className='font-medium'>new here? please <span className='underline text-blue-700'><Link to='/registration'>Register</Link></span></p>
                    </div>
                    {/* others provider */}
                    <div className='my-6'>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='h-[1px] w-1/3 bg-gray-400'></div>
                            <span className='text-lg font-medium'>or</span>
                            <div className='h-[1px] w-1/3 bg-gray-400'></div>
                        </div>
                    </div>
                    <div className='flex justify-center mb-5'>
                        <button className='flex justify-center items-center gap-2 bg-[#3e3e3e] text-white py-2 px-5 rounded text-lg active:scale-95 transition-transform' onClick={handleGoogleSignin}>
                            <FaGoogle></FaGoogle>
                            <span>Continue with Goggle</span>
                        </button>
                    </div>
                    {/* this is to error message */}
                    <div className='pb-4 mt-2'>
                        {
                            erros && <p className='text-center text-sm text-red-600'>{erros}</p>
                        }
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;