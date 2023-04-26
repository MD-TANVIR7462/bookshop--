import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homes = () => {
  const navigate = useNavigate()
const nav=()=>{
navigate('/books')
}
const lern=()=>{
  navigate('/About')
}
   return (
      <div className='w-11/12 mx-auto  '>
             <div className=' mt-20 flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10  mt-24 lg:max-w-lg  lg:pr-5 lg:mb-0 order-last md:order-first'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <div>
            <p className='bg-yellow-300 w-max px-4  rounded-2xl'>On Sale!</p>
          </div>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            A reader lives a <br className='hidden md:block' /> thousand lives{' '}
            <span className='inline-block text-red-600'>before he dies</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
        
        </div>
       
<button className="btn btn-outline btn-secondary" onClick={nav}>Visit shop</button>

       
<button className="btn btn-link text-red-600 " onClick={lern}>Lern More</button>
      </div>
      {/* Lottie Animation */}
      <div className=' mb-auto lg:w-1/2  '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96 md:mb-24 sm:mb-24'>
        <img src="../../public/98849-book-lover.gif" alt="" />
        </div>
      </div>
    </div>
      </div>
   );
};

export default Homes;