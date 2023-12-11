import React from 'react';
import { Swiper,SwiperSlide} from "swiper/react";
import {Navigation,Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";



const carousel = () => {

  return (


    <div>
    
    <div className='h-[600px]'>
    <Swiper
    loop={true}
    spaceBetween={0}
    navigation={true}
    modules={[Navigation,Autoplay]}
    autoplay={{
        delay:3500
    }}

    className='h-[80%]'>
        
        
        <SwiperSlide>
        
        
            <img src="imgs/caro1.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="imgs/caro2.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="imgs/caro3.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="imgs/caro4.jpg" alt=""/>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src="imgs/caro5.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="imgs/caro6.jpg" alt=""/>
        </SwiperSlide>
       
    </Swiper>
    <div></div>
    
</div>


    </div>

    


  )
}

export default carousel



{/* <div class="image-container relative">
<div class="image-list flex overflow-hidden">
    <div class="image-item min-w-[100%] h-[600px] ease-in duration-300">
        <img className='w-[100%] h-[100%] object-cover' src="imgs/caro1.jpg" alt='img' />
    </div>
    <div class="image-item min-w-[100%] h-[600px] ease-in duration-300">
        <img className='w-[100%] h-[100%] object-cover' src="imgs/caro2.jpg"alt='img' />
    </div>
    <div class="image-item min-w-[100%] h-[600px] ease-in duration-300">
        <img className='w-[100%] h-[100%] object-cover' src="imgs/caro3.jpg"alt='img' />
    </div>
    <div class="image-item min-w-[100%] h-[600px] ease-in duration-300">
        <img className='w-[100%] h-[100%] object-cover' src="imgs/caro4.jpg" alt='img'/>
    </div>
    <div class="image-item min-w-[100%] h-[600px] ease-in duration-300">
        <img className='w-[100%] h-[100%] object-cover' src="imgs/caro5.jpg" alt='img'/>
    </div>
    <div class="image-item min-w-[100%] h-[600px] ease-in duration-300">
        <img className='w-[100%] h-[100%] object-cover' src="imgs/caro6.jpg" alt='img'/>
    </div>
</div> 

<div className='image-btn-container absolute top-0 flex justify-between w-[100%]'>
    <button className='slider-btn border-[1px] py-[100px] px-[20px] bg-transparent text-[#000] text-[25px]' id='slide-btn-left'><i class="fa-solid fa-chevron-left"></i></button>
    <button className='slider-btn border-[1px] py-[100px] px-[20px] bg-transparent text-[#000] text-[25px]' id='slide-btn-right'><i class="fa-solid fa-chevron-right "></i></button>
</div>
</div> */}