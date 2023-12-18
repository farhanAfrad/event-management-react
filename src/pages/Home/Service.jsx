
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Service = ({ service }) => {
    // this is used for aos initialization
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 1000,
          easing: "ease-out-cubic",
        });
      }, []);
    const { id,image, description, name, price } = service;
    return (
        <div className='mb-32' data-aos='zoom-in'>
            <div className='relative'>
                <img  src={image} alt="" />
                <div className='text-center bg-white w-11/12 border border-t-2 border-l-2 border-r-2 border-b-0 border-gray-200 absolute bottom-0 left-2/4 -translate-x-2/4 translate-y-1/4 p-4 space-y-3'>
                    <h2 className='font-semibold text-2xl'>{name}</h2>
                    <p className='text-lg'>
                        {
                            description.length > 100 ? description.slice(0, 150) + "..." : description
                        }
                    </p>
                    <p className='text-xl font-medium pb-2'>{price}</p>
                    <Link to={`/services/${id}`}>
                        <button className='border px-5 py-1 rounded bg-[#3E3E3E] text-lg font-semibold text-white active:scale-95 transition-transform'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;