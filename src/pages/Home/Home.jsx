import React, { useEffect } from 'react';
import NavBar from '../../shared/navigation/NavBar';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';
import Footer from './Footer';
import ClientResoponse from './ClientResoponse';
import Calender from '../../calender/calender';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
    const services = useLoaderData();
    console.log(services.length);
    
    // this is used for aos initialization
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

    return (
        <div className='w-full'>
            {/* navbar and banner section */}
            <div className='w-full h-[75vh] from-[#0d03334d] to-[#0d03334d] flex items-center justify-center relative'>

                <video autoPlay loop muted playsInline className='absolute right-0 bottom-0 -z-10 aspect-video w-full h-screen object-cover object-top'>
                    <source src='../../../public/conference.mp4' type='video/mp4' />
                </video>
                <div className='absolute top-0 left-0 w-full py:5 md:py-8 md:px-12 lg:px-20'>
                    <NavBar></NavBar>
                </div>
                {/* banner title */}
                <div className='text-center'>
                    <h1 className='text-7xl text-white font-semibold'>here goes banner title</h1>
                </div>
            </div>

            {/* main section */}
            <div className='mt-20'>
                <div className='text-center space-y-2'>
                    <h2 className='text-5xl font-bold text-[#3e3e3e]'>Our Services</h2>
                    <p className='text-lg'>Discover tailored solutions in our services section, addressing diverse needs and ensuring your success across various domains</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-20'>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
            {/* client response */}
            <div>
                <ClientResoponse></ClientResoponse>
            </div>
            {/* calender: pick your scedule*/}
            <div data-aos="zoom-in">
                <Calender></Calender>
            </div>
            {/* footer section */}
            <div className='bg-neutral mt-28'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;