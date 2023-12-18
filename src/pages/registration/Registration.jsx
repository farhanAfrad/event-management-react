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
        setErros('your password must contain capital letter')
        return;
       }
       if(!/[^a-zA-Z0-9\s]/.test(password)){
        setErros('your password must contain special cahracter');
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
        // after success it will redirect user to the login page
        // setTimeout(()=>{
        //     navigate('/login',{state:{key:location.pathname}});
            
        // },3000)
        
       })
       .catch(error=>{
        setErros(error.message);
       })

       
    }


    return (
        <div className='flex justify-center items-center w-full h-screen relative'>
            <div className='bg-[#3e3e3e] absolute w-full top-0  md:px-12 lg:px-20'>
                <NavBar></NavBar>
            </div>
            <div className='w-4/5 mt-44 mb-11 lg:w-2/5 bg-[#bababa] rounded-sm'>
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
                                <span className="text-lg font-medium">Phone</span>
                            </label>
                            <input type="text" placeholder="phone" className="input input-bordered text-xl" name='phone'/>
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
                    <div className='text-center text-lg'>
                        <p className='font-medium'>already have an account? please <span className=' text-blue-600'><Link to='/login'>login</Link></span></p>
                    </div>
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

export default Registration;