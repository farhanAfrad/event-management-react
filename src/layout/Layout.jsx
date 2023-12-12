
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/navigation/NavBar';

const Layout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;