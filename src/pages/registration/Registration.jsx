import { useContext,useState } from 'react';
import NavBar from '../../shared/navigation/NavBar';
import { Link, useLocation, useNavigate,Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Registration = () => {
    // consuming the context
    const {createUser} = useContext(AuthContext);
    console.log(createUser);

    const [erros, setErros] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    
    const handleSubmit = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
       const name = form.get('name');
       const email = form.get('email');
       const password = form.get('password');

       if(!/[A-Z]/.test(password)){
        toast.warn('your password must contain capital letter');
        
        return;
       }
       if(!/[^a-zA-Z0-9\s]/.test(password)){
        toast.warn('your password must contain special cahracter');
        return;
       }
    //    resetting setErros
       setErros('');
       console.log(name,email,password);
        //creating an account
       createUser(email,password)
       .then(result =>{
        console.log(result.user);
        toast.success('congrats! you have successfully done registration',{autoClose: 1500});
        // after seccess it will redirect user to the login page
        setTimeout(()=>{
            navigate('/login',{state:{key:location.pathname}});
            
        },3000)
        
       })
       .catch(error=>{
        setErros(error.message);
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
                                <span className="text-lg font-medium">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered text-xl" required name='name'/>
                        </div>
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
                            <input type="text" placeholder="password" className="input input-bordered text-xl" required name='password'/>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <input type="checkbox" name="checkbox" id="check" className='w-5 h-5'/>
                            <Link className='text-lg font-medium'>Accept terms & condtion</Link>
                        </div>
                        <div className="form-control mt-6">
                            <button className='border px-5 py-3 rounded bg-[#3E3E3E] text-lg font-semibold text-white active:scale-95 transition-transform'>Registration</button>
                        </div>
                    </form>
                    <div className='text-center text-lg pb-4'>
                        <p className='font-medium'>already have an account? please <span className='underline text-blue-700'><Link to='/login'>login</Link></span></p>
                    </div>
                </div>
               
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;