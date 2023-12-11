import React from 'react';


const grid1 = () => {
    const arr=[
        {img:'https://m.media-amazon.com/images/I/61OrZcNEvCL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/51uTg0+xM-L._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/51ciSEsxNYL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/61n23vJOumL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/41LFXwUZ7dL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/51soywcAI9L._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/51soywcAI9L._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/61DWGRlcsmL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/71zYXNv5FFL._AC_SS260_.jpg'},
    ]
    
  return (
   <div className=''>
    <div className='bg-white px-4'>
        <h5 className='text-[18px] font-semibold text-[#0f1111] py-2'>Wow weekend Sale | Upto 60% | Beans bags</h5>
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
        <a href="#" className='text-[#007185]  font-semibold text-[15px]'>See all offers</a>


    </div>


     </div>
 
  )
}

export default grid1