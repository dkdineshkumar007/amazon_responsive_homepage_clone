import React from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';

function imgSlider2() {
    function scrl2() {

        var left = document.querySelector(".scroll-images3");

        left.scrollBy(-900, 0);

      }

      function scrr2() {

        var right = document.querySelector(".scroll-images3");

        right.scrollBy(900, 0);

      }

  return (
    <div>
    <div className='w-[1470px] h-[285px] bg-white mx-auto p-4 mt-4'>
    <p className='text-[21px] font-[700] leading-[16px] mb-4 mt-2'>Blockbuster deals <span>See all deals</span></p>
<div class="flex relative">

    
      <div class=" w-[60px] h-[150px] absolute top-16 z-[100]">  
      <div className='bg-white absolute float-left rounded-r-md py-[24px] shadow-sm'><MdChevronLeft className='' onClick={scrl2} size={40}/></div>
      </div>
          
        
          
      <div class="w-[100%] gap-2 flex justify-start items-center hover:overflow-auto relative scroll-smooth scroll-images3 overflow-y-hidden overflow-x-hidden">
          
      <div className=' min-w-[270px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd1.jpg'></img></div>
          
      </div>

      <div className=' min-w-[145px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd2.jpg'></img></div>
          
          
      </div>

      <div className=' min-w-[189px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd3.jpg'></img></div>
          
      </div>
      <div className=' min-w-[145px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd4.jpg'></img></div>
          
           
      </div>
      <div className=' min-w-[228px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd5.jpg'></img></div>
         
          
      </div>
      <div className=' min-w-[231px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd6.jpg'></img></div>
         
          
      </div>
      <div className=' min-w-[145px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd7.jpg'></img></div>
         
          
      </div>
      <div className=' min-w-[146px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd8.jpg'></img></div>
          
          
      </div>
      <div className=' min-w-[228px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd5.jpg'></img></div>
          
          
      </div>

      <div className=' min-w-[145px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd10.jpg'></img></div>
         
          
      </div>

      <div className=' min-w-[134px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd11.jpg'></img></div>
         
          
      </div>


      <div className=' min-w-[270px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd1.jpg'></img></div>
          
      </div>

      <div className=' min-w-[145px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd2.jpg'></img></div>
          
          
      </div>

      <div className=' min-w-[189px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd3.jpg'></img></div>
          
      </div>
      <div className=' min-w-[145px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd4.jpg'></img></div>
          
           
      </div>
      <div className=' min-w-[228px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd5.jpg'></img></div>
         
          
      </div>
      <div className=' min-w-[231px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd6.jpg'></img></div>
         
          
      </div>
      <div className=' min-w-[145px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd7.jpg'></img></div>
         
          
      </div>
      <div className=' min-w-[146px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd8.jpg'></img></div>
          
          
      </div>
      <div className=' min-w-[228px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd5.jpg'></img></div>
          
          
      </div>

      <div className=' min-w-[145px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd10.jpg'></img></div>
         
          
      </div>

      <div className=' min-w-[134px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd11.jpg'></img></div>
         
          
      </div>

      <div className=' min-w-[153px] h-[200px] w-auto'>
          <div className='w-auto h-[200px] flex items-center justify-center'><img className='w-auto h-[200px]' src='./imgs/sd12.jpg'></img></div>
         
          
      </div>

          
      </div>
          
        
          
      <div class=" w-[43px] h-[150px] absolute right-0 top-16 float-right">
      
      <div className='z-99 pl-2  bg-white py-[24px] rounded-l-md shadow-sm'> <MdChevronRight onClick={scrr2} size={40}/></div>
      
      </div>
          
    </div>

    </div>

   </div>
  )
}

export default imgSlider2