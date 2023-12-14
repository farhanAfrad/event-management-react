import  { useContext } from 'react';
import { FaUserCircle,FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa";
import { AuthArrayContext, AuthContext } from '../../AuthProvider/AuthProvider';
import NavBar from '../../shared/navigation/NavBar';

const UserProfile = () => {
    const { user} = useContext(AuthContext);
    const {selectedService} = useContext(AuthArrayContext);

    // removing duplicate element
   let uniqueService = [];
    selectedService.map(service =>{
        if(!uniqueService.includes(service)){
            uniqueService.push(service);
        }
        
    })
    console.log(uniqueService);
    return (
        <div className='flex relative w-full h-screen justify-center items-center'>
             <div className='bg-[#3e3e3e] absolute w-full top-0 py:5 md:py-8 md:px-12 lg:px-20'>
                <NavBar></NavBar>
            </div>
            <div className="border w-2/5 grid grid-cols-1 md:grid-cols-3">
                <div className='flex py-10 md:p-0 flex-col justify-center items-center border-r bg-[#bababa]  gap-2'>
                    <div className='text-6xl text-white'>
                        <FaUserCircle></FaUserCircle>
                    </div>
                    <p className='text-lg font-medium'>{user?.displayName}</p>
                </div>
                <div className="card-body col-span-2">
                    <div>
                        <h3 className='border-b-2 text-lg font-semibold pb-4 mb-4'>Information</h3>
                        <div className='flex flex-col md:flex-row gap-6'>
                            <div>
                                <h4 className='text-xl font-bold mb-2'>Email</h4>
                                <p>{user?.email}</p>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold mb-2'>Phone</h4>
                                <p>{user?.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h3 className='border-b-2 text-lg font-semibold pb-4 mb-4'>Service You Selected</h3>
                        <div className='flex flex-col md:flex-row gap-6'>
                            <div>
                                <ul>
                                    {
                                        uniqueService &&
                                       uniqueService.map(service => <li key={service.id}>{service}</li>) 
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex text-xl gap-3 mt-4 text-blue-600'>
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;