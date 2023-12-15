import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRouteYourServices = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return <div className='w-full h-screen flex justify-center items-center'>
            <span className="loading loading-spinner loading-lg"></span>;
        </div>
    }
    if(user){
        return children;
    }
   
};

export default PrivateRouteYourServices;