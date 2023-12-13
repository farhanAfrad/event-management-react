import { Children, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate,useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <div className='w-full h-screen flex justify-center items-center'>
            <span className="loading loading-spinner loading-lg"></span>;
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;