import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouteProfile = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    if(loader){
        return <div className='w-full h-screen flex justify-center items-center'>
        <span className="loading loading-spinner loading-lg"></span>;
    </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/'></Navigate>
};

export default PrivateRouteProfile;