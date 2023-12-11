import React from 'react';


const grid3 = () => {
    const arr=[
        {img:'https://m.media-amazon.com/images/I/61tJQVLMNCL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/71ZZDkET4LL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/71OUnDOugZL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/713JC5+MMhL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/61morvGe3yL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/61KzzEcqDpL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/71LtQCvMu4L._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/41hkIWkFhoL._AC_SS260_.jpg'},
        {img:'https://m.media-amazon.com/images/I/61K0uhQVIxL._AC_SS260_.jpg'},
    ]
    
  return (
   <div className=''>
    <div className='bg-white px-4'>
        <h5 className='text-[18px] font-semibold text-[#0f1111] py-2'>Starting r99 | Mosquito  bat, nets, sprays more</h5>
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

export default grid3