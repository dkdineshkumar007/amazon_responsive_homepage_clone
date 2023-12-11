import React from 'react'

function prodCardTemp2({title,img1,des1,img2,des2,img3,des3,img4,des4,link}) {
  return (
    <div className='h-[420px w-[350px] bg-white relative'>
        <div className='text-[21px] font-[700] font[Amazon Ember] px-4 mt-4'>{title}</div>
        <div className='grid grid-cols-2 px-4 gap-x-4 gap-y-2 mt-4 text'>
            <div className='cursor-pointer'>
                <div><img  className='h-[102px]'  src={img1} alt="" /></div>
                <div className='text-[12px] h-8'>{des1}</div>
            </div>
            <div className='cursor-pointer'>
                <div><img  className='h-[102px]' src={img2} alt="" /></div>
                <div className='text-[12px] h-8'>{des2}</div>
            </div>
            <div className='cursor-pointer'>
                <div><img  className='h-[102px]' src={img3} alt="" /></div>
                <div className='text-[12px] min-h-8'>{des3}</div>
            </div>
            <div className='cursor-pointer'>
                <div><img  className='h-[102px]' src={img4} alt="" /></div>
                <div className='text-[12px] min-h-8'>{des4}</div>
            </div>
        </div>
        <div className='absolute left-4 bottom-4 text-[13px] text-[#007185] font-semibold'>{link}</div>

    </div>
  )
}

export default prodCardTemp2