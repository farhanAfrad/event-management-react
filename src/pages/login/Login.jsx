
import { useContext } from 'react';
import NavBar from '../../shared/navigation/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate, Link } from 'react-router-dom';





const Login = () => {
    
    const {login} = useContext(AuthContext);

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
            toast.success('succefully logged in',{
                autoClose:1500
            });
            // setTimeout(()=>{
            //     navigate('./')
            // },3000)
        })
        .catch(error =>{
            console.log(error.message);
            toast.warning(error.message);
        })
    }
    return (
        <div className='flex justify-center items-center w-full h-screen relative'>
            <div className='bg-[#3e3e3e] absolute w-full top-0 py:5 md:py-8 md:px-12 lg:px-20'>
                <NavBar></NavBar>
            </div>
            <div className='w-3/5 bg-[#bababa] rounded'>
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
                        <div className="form-control mt-6">
                            <button className='border px-5 py-3 rounded bg-[#3E3E3E] text-lg font-semibold text-white active:scale-95 transition-transform'>Login</button>
                        </div>
                    </form>
                    <div className='text-center text-lg pb-4'>
                        <p className='font-medium'>new here? please <span className='underline text-blue-700'><Link to='/registration'>Register</Link></span></p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;