import React from 'react'
import {data3} from './imgsArray.js'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';

function slider3() {

    
  const slideLeft3 =()=>{
    var slider = document.getElementById('slider3');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight3 =()=>{
    var slider = document.getElementById('slider3');
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return (
    <div className='mt-4'>
         <div className='w-[1470px] h-[300px] bg-white mx-auto'>
        <p className='text-[21px] font-[700] font-[Amazon Ember] pl-6 mb-2 pt-4'>Up to 40% off | Great offers on popular smartphones<span className='text-[13px] text-[#007185] font-[600] ml-4'>  See more</span><span/></p>
        <div className='relative flex items-center gap-[10px] px-6'>
        
        <div className='bg-white absolute float-left top-14 rounded-r-md py-[24px] shadow-sm'><MdChevronLeft className='' onClick={slideLeft3} size={40}/></div>
      <div id='slider3' className='w-[100%] h-full overflow-hidden hover:overflow-auto scroll-smooth whitespace-nowrap flex ease-in-out duration-300 gap-[10px]'>
      {
          
          data3.map((item)=>(
            <img className='cursor-pointer pb-4 ease-in-out duration-300 h-[200px] w-[200px]' src={item.img} alt="" />
           
          )
          )
          
          }

      </div>
      <div className='absolute right-6 z-99 top-14  bg-white py-[24px] rounded-l-md shadow-sm'> <MdChevronRight onClick={slideRight3} size={40}/></div>
     
      

          
         
        </div>

      </div>
    </div>
  )
}

export default slider3