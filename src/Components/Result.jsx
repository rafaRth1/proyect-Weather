import useWeather from '../Hooks/useWeather';
import CardData from './CardData';
import CardWeather from './CardWeather';

const Result = () => {
   const { data, forecasts, celOrFaren, setCelOrFaren } = useWeather();

   return (
      <div className='min-h-full '>
         <div className='block text-right'>
            <span
               className={`${
                  !celOrFaren ? `text-black bg-white` : 'text-white w- bg-neutral-700'
               }  font-bold  p-3 mr-2 rounded-3xl cursor-pointer`}
               onClick={() => setCelOrFaren(false)}
            >
               °C
            </span>
            <span
               className={`${
                  celOrFaren ? `text-black bg-white` : 'text-white bg-neutral-700'
               } text-white font-bold p-3 rounded-3xl cursor-pointer`}
               onClick={() => setCelOrFaren(true)}
            >
               °F
            </span>
         </div>

         <div className='max-w-3xl my-0 mx-auto h-full'>
            <div className='flex justify-between flex-wrap gap-5 md:h-1/4 p-5'>
               {forecasts.map((data) => (
                  <CardWeather key={data.date} data={data} />
               ))}
            </div>

            <h1 className='text-white text-4xl font-bold my-10'>Today's Hightlights</h1>

            <div className='md:h-2/4'>
               <div className='md:flex md:flex-col gap-y-10 h-full justify-center'>
                  <div className='block md:flex md:gap-10'>
                     <CardData>
                        <h2 className='text-2xl block'>Wind Status</h2>
                        <span className='text-6xl font-bold block'>{data.wind_mph}mph</span>
                        <span className='block'>WSW</span>
                     </CardData>
                     <CardData>
                        <h2 className='text-2xl'>Humidity</h2>
                        <span className='text-6xl font-bold mb-3'>{data.humidity}%</span>
                        <div className='w-full h-3 rounded-2xl bg-amber-100'></div>
                        <div
                           className={`absolute left-4 bottom-6 w-8/12 h-3 rounded-2xl bg-amber-300 transition-all`}
                        ></div>
                     </CardData>
                  </div>
                  <div className='block md:flex gap-10'>
                     <CardData>
                        <h2 className='text-2xl'>Visibility</h2>
                        <span className='text-6xl font-bold'>{data.vis_miles} miles</span>
                     </CardData>
                     <CardData>
                        <h2 className='text-2xl'>Air Pressure</h2>
                        <span className='text-6xl font-bold'>{data.pressure_mb} mb</span>
                     </CardData>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Result;
