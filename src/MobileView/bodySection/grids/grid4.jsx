import React from 'react';


const grid4 = () => {
    const arr=[
        {img:'https://m.media-amazon.com/images/I/614AUX7hU+L._AC_SS260_.jpg'},

        {img:'https://m.media-amazon.com/images/I/41LUtBDfE7L._AC_SS260_.jpg'},

        {img:'https://m.media-amazon.com/images/I/51ldd0NuNJL._AC_SS260_.jpg'},

        {img:'https://m.media-amazon.com/images/I/71P-uko7-yL._AC_SS260_.jpg'},

        {img:'https://m.media-amazon.com/images/I/61rmocGGaoL._AC_SS260_.jpg'},

        {img:'https://m.media-amazon.com/images/I/71daowwL1JL._AC_SS260_.jpg'},

        {img:'https://m.media-amazon.com/images/I/61CKRoo2WZL._AC_SS260_.jpg'},

        {img:'https://m.media-amazon.com/images/I/61NCpkVy7UL._AC_SS260_.jpg'},

        {img:'https://m.media-amazon.com/images/I/71OdZHlkoxL._AC_SS260_.jpg'},
    ]
    
  return (
   <div className=''>
    <div className='bg-white px-4'>
        <h5 className='text-[18px] font-semibold text-[#0f1111] py-2'>Upto 60% off | Bestsellers from women owned businesses</h5>
        <div className='grid grid-cols-3 gap-2 pb-2'>
        {         
          arr.map((item)=>(
           <div className='w-[122px] h-[122px] bg-slate-50 p-2'>
            <img src={item.img} alt="" />

           </div>
          )
          )    
          }
        </div>
        <a href="#" className='text-[#007185]  font-semibold text-[15px]'>See More</a>


    </div>


     </div>
 
  )
}

export default grid4