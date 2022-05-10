import React from 'react';
import '../Styles/Spinner.css';

const Spinner = () => {
   return (
      <div className='lds-roller'>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
   );
};

export default Spinner;
