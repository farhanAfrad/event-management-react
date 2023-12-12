import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const services = useLoaderData();
    const {id} = useParams();
    const service = services.find(s => s.id == id);
    console.log(service);
    const {image,description, price,name} = service;
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='relative'>
                <img className='md:scale-x-125 hover:scale-y-105 transition-transform duration-700 w-full' src={image} alt="" />
                <div className='text-center bg-white w-11/12 border border-t-2 border-l-2 border-r-2 border-b-0 border-gray-200 absolute p-4 space-y-5 right-2/4 translate-x-2/4 top-2/4'>
                    <h2 className='font-semibold text-3xl'>{name}</h2>
                    <p className='text-lg'>
                        {description}                       
                    </p>
                    <p className='text-xl font-semibold pb-3'>{price}</p>
                    <Link to='/'>
                        <button className='border px-5 py-1 rounded bg-[#3E3E3E] text-lg font-semibold text-white active:scale-95 transition-transform'>Back to Home</button>
                    </Link>
                </div>
            </div> 
        </div>
    );
};

export default ServiceDetails;