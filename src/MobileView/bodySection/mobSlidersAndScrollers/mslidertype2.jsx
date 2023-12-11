import React from 'react'

function mslidertype2({head,txt,img,li}) {
  return (
    <div>
        <div className='bg-white'>
            <div className='pb-2'>
            <h5 className='text-[18px] text-[#111111] pb-1'>{head}</h5>
            <p>{txt}</p>
            </div>
            
            <div className='flex overflow-auto scroll scroll-smooth '>
                <div className='w-[160px] h-[255px]'>
                    <img className='w-[160px] h-[203px]' src={img} alt="" />
                    <p className='text-[15px] text-[#0f1111] leading-tight mt-2'>{li}</p>

                </div>


            </div>
        </div>
    </div>
  )
}

export default mslidertype2