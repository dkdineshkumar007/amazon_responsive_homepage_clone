import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react'

function sliderAlter() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
    <div className="bg-white h-[350px] w-[1470px] mx-auto my-4">
        <p className="text-[21px] font-[700] leading-[1.5] pt-4 pb-4 px-6">Blockbuster deals <span className="text-[13px] text-blue-400"><a>See all deals</a></span></p>
        <div className="px-6">

        <Slider {...settings}>
          <div>
            
            <div className='w-[240px] h-[285px]'>
          <div className='bg-slate-200 w-[240px] h-[200px]flex items-center justify-center'><img className='mx-auto' src='./imgs/sl1.jpg'></img></div>
          <div><p className='text-[12px] leading[16px] text-[#cc0c39] font-[700]'><span className='text-white px-[6px] py-[4px] rounded bg-[#CC0C39] mr-2'>8%off </span>Summer Sale Deal</p></div>
          <div><p>R 18,499.00<span>M.R.P: r19,999.00</span></p></div>
          <div><p>Limited time offer on oneplus Nord</p></div>


        </div>


          </div>
          <div>
            
            <div className='w-[240px] h-[285px]'>
          <div className='bg-slate-200 w-[240px] h-[200px]flex items-center justify-center'><img className='mx-auto' src='./imgs/sl2.jpg'></img></div>
          <div><p className='text-[12px] leading[16px] text-[#cc0c39] font-[700]'><span className='text-white px-[6px] py-[4px] rounded bg-[#CC0C39] mr-2'>8%off </span>Summer Sale Deal</p></div>
          
          <div><p className="text-[12px]">Limited time offer on oneplus Nord...</p></div>


        </div>


          </div>
          <div>
            
            <div className='w-[240px] h-[285px]'>
          <div className='bg-slate-200 w-[240px] h-[200px]flex items-center justify-center '><img className='mx-auto' src='./imgs/sl3.jpg'></img></div>
          <div><p className='text-[12px] leading[16px] text-[#cc0c39] font-[700]'><span className='text-white px-[6px] py-[4px] rounded bg-[#CC0C39] mr-2'>8%off </span>Summer Sale Deal</p></div>
          
          <div><p className="text-[12px]">Limited time offer on oneplus Nord...</p></div>


        </div>


          </div>
          <div className="w-[240px] h-[285px]">
            
          <div className='w-[240px] h-[285px]'>
          <div className='bg-slate-200 w-[240px] h-[200px]'><img className='mx-auto' src='./imgs/sl4.jpg'></img></div>
          <div><p className='text-[12px] leading[16px] text-[#cc0c39] font-[700]'><span className='text-white px-[6px] py-[4px] rounded bg-[#CC0C39] mr-2'>8%off </span>Summer Sale Deal</p></div>
          <div><p>R 18,499.00<span>M.R.P: r19,999.00</span></p></div>
          <div><p>Limited time offer on oneplus Nord</p></div>
        </div>


          </div>
          <div>
            
          <div className='w-[240px] h-[285px]'>
          <div className='bg-slate-200 w-[240px] h-[200px]'><img className='mx-auto' src='./imgs/sl5.jpg'></img></div>
          <div><p className='text-[12px] leading[16px] text-[#cc0c39] font-[700]'><span className='text-white px-[6px] py-[4px] rounded bg-[#CC0C39] mr-2'>8%off </span>Summer Sale Deal</p></div>
          <div><p>R 18,499.00<span>M.R.P: r19,999.00</span></p></div>
          <div><p>Limited time offer on oneplus Nord</p></div>
        </div>

          </div>
          <div>
            
            <div className='w-[240px] h-[285px]'>
          <div className='bg-slate-200 w-[240px] h-[200px] flex items-center justify-center'><img className='' src='./imgs/sl6.jpg'></img></div>
          <div><p className='text-[12px] leading[16px] text-[#cc0c39] font-[700]'><span className='text-white px-[6px] py-[4px] rounded bg-[#CC0C39] mr-2'>8%off </span>Summer Sale Deal</p></div>
          
          <div><p className="text-[12px]">Limited time offer on oneplus Nord...</p></div>


        </div>


          </div>
          <div>
            
            <div className='w-[240px] h-[285px]'>
          <div className='bg-slate-200 w-[240px] h-[200px]flex items-center justify-center'><img className='mx-auto' src='./imgs/sl7.jpg'></img></div>
          <div><p className='text-[12px] leading[16px] text-[#cc0c39] font-[700]'><span className='text-white px-[6px] py-[4px] rounded bg-[#CC0C39] mr-2'>8%off </span>Summer Sale Deal</p></div>
          
          <div><p className="text-[12px]">Limited time offer on oneplus Nord...</p></div>


        </div>


          </div>
          <div>
            
            <div className='w-[240px] h-[285px] py-'>
          <div className='bg-slate-200 w-[240px] h-[200px]flex items-center justify-center'><img className='mx-auto' src='./imgs/sl8.jpg'></img></div>
          <div><p className='text-[12px] leading[16px] text-[#cc0c39] font-[700]'><span className='text-white px-[6px] py-[4px] rounded bg-[#CC0C39] mr-2'>8%off </span>Summer Sale Deal</p></div>
          
          <div><p className="text-[12px]">Limited time offer on oneplus Nord...</p></div>


        </div>


          </div>
        </Slider>

        </div>
        
      </div>
    );
  }

export default sliderAlter
       