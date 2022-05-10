import { useState } from 'react';
import Alerta from '../Components/Alerta';
import useWeather from '../Hooks/useWeather';
import { MdOutlineClose } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';
import { getLocationSearch } from '../Api/getLocationSearch';
import Spinner from '../Components/Spinner';

const SearchLayout = () => {
   const [countries, setCountries] = useState([]);
   const [search, setSearch] = useState('');
   const [alerta, setAlerta] = useState({});
   const { setData, setForecasts, showSearchContainer, setshowSearchContainer } = useWeather();
   const [showSpinner, setShowSpinner] = useState(false);

   const handleSearch = async (country) => {
      try {
         setShowSpinner(true);
         const DATA = await getLocationSearch(country);

         setData({
            name: DATA.location.country,
            icon: DATA.current.condition.icon,
            temp_c: DATA.current.temp_c,
            nameTemperature: DATA.current.condition.text,
            humidity: DATA.current.humidity,
            wind_mph: DATA.current.wind_mph,
            vis_miles: DATA.current.vis_miles,
            pressure_mb: DATA.current.pressure_mb,
            dataAll: DATA,
         });

         setForecasts([...DATA.forecast.forecastday]);
         setSearch('');
         setAlerta({});
         setCountries([...countries, search]);
         setshowSearchContainer(true);
         setShowSpinner(false);
      } catch (error) {
         setAlerta({
            msg: 'Pais Incorrecto',
            error: true,
         });
      }
   };

   const { msg } = alerta;

   return (
      <div
         className={`search-layout ${
            showSearchContainer ? '-translate-x-full' : 'translate-x-0'
         } bg-slate-800 absolute top-0 left-0 w-full h-full  transition-all p-3`}
      >
         <div className='flex flex-col '>
            <MdOutlineClose
               color='white'
               className='cursor-pointer block self-end m-3'
               size={30}
               onClick={() => setshowSearchContainer(true)}
            />

            <div className='flex flex-col lg:flex-row items-center justify-center gap-5'>
               <div className='relative'>
                  <input
                     type='text'
                     className='search relative text-white border-2 border-slate-300 p-2 pl-8 bg-slate-800 focus:border-slate-400 outline-0'
                     placeholder='Search Location'
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                  />
                  <MdSearch color='#747f8e' size={28} className='absolute top-2 left-1' />
               </div>
               <button
                  className='text-white bg-blue-700 py-2 px-3 w-1/5 md:w-auto'
                  onClick={() => handleSearch(search)}
               >
                  Search
               </button>
            </div>

            {showSpinner ? (
               <div className='flex justify-center mt-10'>
                  <Spinner />
               </div>
            ) : (
               <div>
                  {countries.map((country, index) => (
                     <div key={index}>
                        <span
                           className='block border border-slate-500 hover:border-blue-700 p-3 text-white m-3 cursor-pointer'
                           onClick={async () => {
                              const DATA = await getLocationSearch(country);
                              setData({
                                 name: DATA.location.country,
                                 icon: DATA.current.condition.icon,
                                 temp_c: DATA.current.temp_c,
                                 nameTemperature: DATA.current.condition.text,
                                 humidity: DATA.current.humidity,
                                 wind_mph: DATA.current.wind_mph,
                                 vis_miles: DATA.current.vis_miles,
                                 pressure_mb: DATA.current.pressure_mb,
                                 dataAll: DATA,
                              });

                              setForecasts([...DATA.forecast.forecastday]);
                              setshowSearchContainer(true);
                           }}
                        >
                           {country}
                        </span>
                     </div>
                  ))}
               </div>
            )}
         </div>

         {msg && <Alerta alerta={alerta} />}
      </div>
   );
};

export default SearchLayout;
