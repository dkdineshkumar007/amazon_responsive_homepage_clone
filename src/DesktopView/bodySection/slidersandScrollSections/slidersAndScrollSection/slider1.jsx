import React from 'react'
import {data} from './imgsArray.js'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';


function slider1() {


  const slideLeft =()=>{
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight =()=>{
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }
 


  return (
    <div>

      <div className='w-[1470px] h-[300px] bg-white mx-auto mt-4'>
        <p className='text-[21px] font-[700] font-[Amazon Ember] pl-6 mb-2 pt-4'>Up to 40% off | Great offers on popular smartphones<span className='text-[13px] text-[#007185] font-[600] ml-4'>  See more</span><span/></p>
        <div className='relative flex items-center gap-[10px] px-6 box-border'>
        
        <div className='bg-white absolute top-16 float-left rounded-r-md py-[24px] shadow-sm'><MdChevronLeft className='' onClick={slideLeft} size={40}/></div>
      <div id='slider' className='w-[100%] h-full overflow:hidden hover:overflow-auto scroll scroll-smooth whitespace-nowrap flex ease-in-out duration-300 gap-[10px] overflow-y-hidden overflow-x-hidden'>
      {
          
          data.map((item)=>(
            <img className='cursor-pointer pb-4 ease-in-out duration-300' src={item.img} alt="" />
           
          )
          )
          
          }

      </div>
      <div className='z-99 absolute right-6 top-16 bg-white py-[24px] rounded-l-md shadow-sm'> <MdChevronRight onClick={slideRight} size={40}/></div>
     
      

          
         
        </div>

      </div>
    </div>
  )
}

export default slider1