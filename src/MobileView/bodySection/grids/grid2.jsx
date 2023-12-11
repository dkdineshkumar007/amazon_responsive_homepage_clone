import React from 'react';


const grid2 = () => {
    const arr=[
        {img:'https://m.media-amazon.com/images/I/613loUzm9WL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/51uTg0+xM-L._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/91C6slV1XGL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/510fKIqWSfL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/81zzKIcOusL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/51sEM2pxh9L._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/51MvYdrsWcL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/51vw-wdV-eL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/81hauo1yiwL._AC_SS260_.jpg'},
    ]
    
  return (
   <div className=''>
    <div className='bg-white px-4'>
        <h5 className='text-[18px] font-semibold text-[#0f1111] py-2'>Top picks in Automotive</h5>
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

export default grid2