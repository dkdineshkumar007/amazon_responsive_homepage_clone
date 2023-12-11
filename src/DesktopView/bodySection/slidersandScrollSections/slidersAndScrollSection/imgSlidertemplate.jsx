import React from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';
import {speakers} from './imgArray';

function imgSlidertemplate() {

    function scrl() {

        var left = document.querySelector(".scroll-images2");

        left.scrollBy(-500, 0);

      }

      function scrr() {

        var right = document.querySelector(".scroll-images2");

        right.scrollBy(500, 0);

      }

  return (
    <div>
    <div className='w-[1470px] h-[285px] bg-white mx-auto p-4 mt-4'>
    <p className='text-[21px] font-[700] leading-[16px] mb-4 mt-2'>Best selling speakers & Soundbars <span className='text-[13px] text-[#007185] font-semibold ml-4'>See all deals</span></p>
<div class="flex relative">

    
      <div class=" w-[60px] h-[150px] absolute top-14 z-[100]">  
      <div className='bg-white absolute float-left rounded-r-md py-[24px] shadow-sm'><MdChevronLeft className='' onClick={scrl} size={40}/></div>
      </div>

      <div class="w-[100%] gap-2 flex justify-start items-center  overflow-hidden  hover:overflow-auto relative scroll-smooth scroll-images2 overflow-y-hidden overflow-x-hidden">

            {
          
          speakers.map((item)=>(
            <img className='cursor-pointer pb-4 ease-in-out duration-300 h-[200px] w-[200px]' src={item.img} alt="" />
           
          )
          )
          
          }
  
      </div>

      <div class=" w-[43px] h-[150px] absolute top-14 float-right right-0">
      
      <div className='z-99 pl-2  bg-white py-[24px] rounded-l-md shadow-sm'> <MdChevronRight onClick={scrr} size={40}/></div>
      
      </div>
          
    </div>

    </div>

   </div>
  )
}

export default imgSlidertemplate