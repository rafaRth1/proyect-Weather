import React from 'react';

const CardData = ({ children }) => {
   return (
      <div className='relative flex flex-col items-center text-white bg-slate-800 p-6 md:w-1/2 mb-5'>
         {children}
      </div>
   );
};

export default CardData;
