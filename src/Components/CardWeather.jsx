import useWeather from '../Hooks/useWeather';
import Spinner from './Spinner';

const CardWeather = ({ data }) => {
   const { celOrFaren } = useWeather();

   return (
      <div>
         <div className='flex flex-col items-center justify-between text-white text-lg p-4 bg-slate-800 w-44 h-48'>
            <span>Tomorrow</span>

            {data.day.condition.icon ? (
               <img src={`${data.day.condition.icon}`} alt='condition-icon' />
            ) : (
               <Spinner />
            )}

            <div className='flex justify-evenly gap-6'>
               <span>{celOrFaren ? `${data.day.mintemp_f}°F` : `${data.day.mintemp_c}°C`}</span>
               <span className='text-zinc-400'>
                  {celOrFaren ? `${data.day.maxtemp_f}°F` : `${data.day.maxtemp_c}°C`}
               </span>
            </div>
         </div>
      </div>
   );
};

export default CardWeather;
