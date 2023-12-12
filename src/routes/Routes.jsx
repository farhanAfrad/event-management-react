
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import Registration from '../pages/registration/Registration';
import Login from '../pages/login/Login';
import ServiceDetails from '../serviceDetails/ServiceDetails';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('../../public/services.json')
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:()=>fetch('../../public/services.json')
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default Routes;