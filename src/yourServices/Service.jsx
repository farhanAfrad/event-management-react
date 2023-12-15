import React from 'react';


const Service = ({service}) => {
    console.log(service);
    return (
        <div className='mt-10'>
            
            <div className="grid grid-cols-2 bg-base-100 shadow-xl">
            <figure className=''><img src={service.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold">{service.name}</h2>
                    <p className='text-lg font-medium'>{service.description}</p>
                    <p className='text-lg font-semibold'>{service.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;