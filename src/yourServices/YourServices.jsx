import React, { useContext } from 'react';
import { AuthArrayContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';
import NavBar from '../shared/navigation/NavBar';

const YourServices = () => {
    const allServices = useLoaderData();
    const { selectedService } = useContext(AuthArrayContext);
    const uniqueService = [];
    selectedService.forEach(element => {
        if (!uniqueService.includes(element)) {
            uniqueService.push(element);
        }
    });
    const urServices = allServices.filter(service => uniqueService.find(u => u == service.name));
    console.log(urServices);
    return (
        <div>
            <div className='bg-[#3e3e3e] py:5 md:py-8 md:px-12 lg:px-20'>
                <NavBar></NavBar>
            </div>
            <div className='grid grid-cols-1 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto'>
                {
                    urServices.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>

    );
};

export default YourServices;