import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleBook = ({ product }) => {
   console.log(product)

   const { image, subtitle, price, isbn13} = product
   return (
      <NavLink to={`/Books/${isbn13}`} >   <div className='flex  relative mt-4 cursor-pointer transition  duration-200 transform hover:-translate-y-2 '>
         <div className="card w-auto  bg-base-100 shadow-xl ">
            <figure><img src={image
            } alt="Shoes" /></figure>

         </div>
         <div className='bg-black opacity-0  rounded-xl hover:opacity-70 absolute  inset-0 transition-opacity duration-200'>
            <p className='pt-32'><p className='text-white px-5 pt-10'>Price : ${price}</p>
               <p className='text-white text-start pb-5 pl-5 pt-2'>Title : {subtitle?subtitle:'Click For Details'}</p>
            </p>
            <button className="btn btn-link font-semibold text-red-600 " >Click  for  Details</button>
               
               
         

         </div>
      </div>

      </NavLink>
   );
};

export default SingleBook;