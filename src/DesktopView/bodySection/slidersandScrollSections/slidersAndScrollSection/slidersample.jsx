import React from 'react'
import { blockbuster } from './desc';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';

function slidersample() {
    function scrolll() {

        var left = document.querySelector(".scroll-images");

        left.scrollBy(-500, 0);

      }

      function scrollr() {

        var right = document.querySelector(".scroll-images");

        right.scrollBy(500, 0);

      }

  return (
   <div>
    <div className='w-[1470px] h-[365px] bg-white mx-auto p-4 mt-4'>
    <p className='text-[21px] font-[700] leading-[16px] mb-4 pt-2 pb-2'>Blockbuster deals <span className='text-[13px] text-[#007185]  font-semibold'>See all deals</span></p>
<div class="flex relative">

    
      <div class=" w-[60px] h-[150px] absolute top-16 z-[100]">  
      <div className='bg-white absolute float-left rounded-r-md py-[24px] shadow-sm'><MdChevronLeft className='' onClick={scrolll} size={40}/></div>
      </div>
          
        
          
      <div class="w-[100%] gap-2 flex justify-start items-center hover:overflow-auto relative scroll-smooth scroll-images overflow-y-hidden overflow-x-hidden">
          


    {
        blockbuster.map((item)=>(
            <div className='min-w-[240px] h-[285px]'>
            <div className='bg-slate-100 w-[240px] h-[200px] flex items-center justify-center'><img className='mx-auto' src={item.img}></img></div>
            <div><p className='text-[12px] leading[16px] text-[#cc0c39] font-[700] py-2'><span className='text-white px-[6px] py-[4px] rounded bg-[#CC0C39] mr-2'>{item.off}</span>{item.sale}</p></div>
            
            <div><p className='text-[13px]'>{item.descrip}</p></div>
        </div>
        ))
    }
     


      </div>
          
        
          
      <div class=" w-[45px] h-[150px] absolute right-0 top-16 float-right">
      
      <div className='bg-white py-[24px] rounded-l-md shadow-sm pl-2'> <MdChevronRight onClick={scrollr} size={40}/></div>
      
      </div>
          
    </div>

    </div>

   </div>
  )
}

export default slidersample;