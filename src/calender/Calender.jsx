
import dayjs from 'dayjs';
import { useState } from 'react';
import { getCalender } from './getCalender';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Date from './Date';

const Calender = () => {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December'];

    // calender();
    const day = dayjs();
    const [today, setToday] = useState(day);
    const [pickADate,setPickADate] = useState(null);


    const dates = getCalender(today.month(), today.year());
    // console.log(dates);
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const pickDate = (d) =>{
        setPickADate(d);
    }
    return (
        <div className='w-full h-screen flex flex-col md:flex-row justify-center items-center md:divide-x-2 gap-10 md:gap-0'>
            <div className='w-96 h-96 pr-3'>
                <div className='flex justify-between'>
                    <h2 className='text-lg font-medium'>{month[today.month()]}  {today.year()}</h2>
                    <div className='flex items-center gap-3'>
                        <button className='cursor-pointer active:scale-75 transition-transform' onClick={() => { setToday(today.month(today.month() - 1)) }}>
                            <FaAngleLeft></FaAngleLeft>
                        </button>
                        <p className='text-lg cursor-pointer active:scale-90 transition-transform' onClick={() => { setToday(day) }}>Today</p>
                        <button className='cursor-pointer active:scale-75 transition-transform' onClick={() => { setToday(today.month(today.month() + 1)) }}>
                            <FaAngleRight></FaAngleRight>
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-7 text-sm text-gray-600'>
                    {
                        days.map((day, index) => <p className='h-14 grid place-content-center' key={index}>{day}</p>)
                    }
                </div>
                <div className='grid grid-cols-7'>
                    {
                        dates.map((dt, index) => <Date key={index} dt={dt} pickDate={pickDate}></Date>)
                    }
                </div>
            </div>
            <div className='h-96'>
                    <h2 className='text-xl font-semibold pl-5'>Select your date</h2>
                    <p className='pl-5 font-medium'>date:{`${pickADate?pickADate.date() +"-"+ pickADate.month()+"-"+ pickADate.year():''}`}</p>
            </div>
        </div>
    );
};

export default Calender;