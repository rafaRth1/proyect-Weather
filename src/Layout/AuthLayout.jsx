import React from 'react';
import Search from '../Components/Search';
import SearchLayout from './SearchLayout';
import '../App.css';
import { WeatherProvider } from '../Context/WeatherContext';
import Result from '../Components/Result';

const AuthLayout = () => {
   return (
      <WeatherProvider>
         <div className='App md:flex'>
            <div className='h-screen md:w-1/3 2xl:w-1/4 bg-slate-800 relative p-5'>
               <div className='background bg-ima w-full h-full absolute left-0 bottom-60 opacity-10 bg-no-repeat bg-center pointer-events-none'></div>
               <div className='search-container'>
                  <Search />
               </div>
               <SearchLayout />
            </div>
            <div className='md:w-2/3 2xl:w-3/4 md:h-screen bg-gray-900 p-5'>
               <Result />
            </div>
         </div>
      </WeatherProvider>
   );
};

export default AuthLayout;
