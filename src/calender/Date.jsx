

const Date = ({dt,pickDate}) => {
    
    const {date,currentMonth,today} = dt;
  
    return (
        <div className={`h-14 border-t grid place-content-center ${currentMonth?'':'text-gray-400'}`}>
            <p className={`h-8 grid place-content-center cursor-pointer w-8 text-center rounded-full ${today? 'bg-red-600 text-white':'hover:bg-black hover:text-white transition-all'}`} onClick={()=>{pickDate(date)}}>{date.date()}</p>
        </div>
    );
};

export default Date;