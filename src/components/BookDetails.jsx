import React from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';

const BookDetails = () => {


   const useloader =useLoaderData()
   console.log(useloader)
 const {image,title,price,subtitle,isbn13}=useloader

const navigate =useNavigate()
 const goback = ()=>{
  navigate(-1)
 }
   return (
      <div className=' md:w-3/5 md:mx-auto mt-44'>
        <div className="card card-side bg-base-100 shadow-2xl">
  <figure><img src={image} alt="Movie"/></figure>
  <div className="card-body  pl-0  pr-2 md:pl-14 md:pr-14">
    <h2 className="card-title  md:pt-11 ">{title}</h2>
    <h2 className='text-gray-400 font-bold hidden md:inline-block'>{subtitle}</h2>
    <p className='font-bold'>price : {price}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-primary  hidden md:inline-block  " onClick={goback}>Go Back</button>
    <NavLink to={`/buy/${isbn13}`}>
    <button className="btn btn-active btn-secondary m-auto md:mx-0 mt-3 md:mt-0" onClick={''}>Buy Now</button>
    </NavLink>
    </div>
  </div>
</div>
      </div>
   );
};

export default BookDetails;