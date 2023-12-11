import React from 'react'
import {data2} from './imgsArray.js'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';

function slider2() {

    const slideLeft2 =()=>{
      var slider = document.getElementById('slider2');
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  
    const slideRight2 =()=>{
      var slider = document.getElementById('slider2');
      slider.scrollLeft = slider.scrollLeft + 500;
    }
   
  return (
    <div className='mt-4'>

    <div className='w-[1470px] h-[300px] bg-white mx-auto'>
      <p className='text-[21px] font-[700] font-[Amazon Ember] pl-6 mb-2 pt-4'>Up to 40% off | Great offers on popular smartphones<span className='text-[13px] text-[#007185] font-[600] ml-4'>  See more</span><span/></p>
      <div className='relative flex items-center gap-[10px] px-6'>
      
      <div className='bg-white absolute float-left rounded-r-md py-[24px] top-16 shadow-sm'><MdChevronLeft className='' onClick={slideLeft2} size={40}/></div>
    <div id='slider2' className='w-[100%] h-full overflow-hidden hover:overflow-auto overflow-y-hidden scroll-smooth whitespace-nowrap flex ease-in-out duration-300 gap-[20px]'>
    {
        
        data2.map((item)=>(
          <img className='max-w-[270px] object-contain cursor-pointer pb-4 ease-in-out duration-300' src={item.img} alt="" />
         
        )
        )
        
        }

    </div>
    <div className='absolute right-6 z-99  bg-white py-[24px] rounded-l-md shadow-sm'> <MdChevronRight onClick={slideRight2} size={40}/></div>
   
    

        
       
      </div>

    </div>
  </div>
  )
}

export default slider2