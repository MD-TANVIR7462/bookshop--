import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBook from '../SingleBook';


const Books = () => {
   const products = useLoaderData()
  const Books = products.books


   return (
     
<div className='w-11/12 mx-auto'>
        
            <div className=' md:grid md:grid-cols-4 gap-2'>
            {
               Books.map(book => <SingleBook product={book} key={book.isbn13
               }></SingleBook>)
            }
            </div></div>
          
            
        

   );
};

export default Books;