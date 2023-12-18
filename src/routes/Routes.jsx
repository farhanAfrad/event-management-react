
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import Registration from '../pages/registration/Registration';
import Login from '../pages/login/Login';
import ServiceDetails from '../serviceDetails/ServiceDetails';
import PrivateRoute from '../privateRoute/PrivateRoute';
import UserProfile from '../pages/userProfile/UserProfile';
import PrivateRouteProfile from '../privateRoute/privateRouteProfile';
import YourServices from '../yourServices/YourServices';
import PrivateRouteYourServices from '../privateRoute/PrivateRouteYourServices';
import ErrorPage from '../errorPage/ErrorPage';



const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('../../public/services.json')
            },
            {
                path:'/services/:id',

                element:<PrivateRoute>
                    <ServiceDetails></ServiceDetails>,
                </PrivateRoute>,
                loader:()=>fetch('../../public/services.json')
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/profile',
                element:<PrivateRouteProfile>

                    <UserProfile></UserProfile>
                </PrivateRouteProfile>
            },
            {
                path:'/yourservices',
                element:<PrivateRouteYourServices>

                    <YourServices></YourServices>
                </PrivateRouteYourServices>,
                loader:()=>fetch('../../public/services.json')
            }
        ]
    }
])

export default Routes;