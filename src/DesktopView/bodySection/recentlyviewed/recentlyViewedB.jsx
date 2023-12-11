import React from 'react'

function recentlyViewedB({img,name,img2,nums,rate,deldate}) {
  return (
    <div>
    <div className='rvcard h-[420px] w-[160px]'>
    <img src={img}></img>
    <a href="#" className='text-[14px] text-[#007185] font-[Amazon Ember] leading-tight font-[500] tracking-tight hover:text-red-500'>{name}</a>
    <div className='flex items-center '><img className='w-[80px] h-[15px] mr-1' src={img2} alt="" /><p className='text-[13px] text-[#007185] tracking-tight leading-tighv font-[500] '>{nums}</p></div>
    <p className='text-[17px] mb-[4px] font-medium'><span className='text-[12px] -mt-4'>₹</span>{rate}</p>
    <p className='text-[12px] text-[#0F1111]'>Get it by <span className='font-[600]'>{deldate}</span></p><p className='text-[12px]'>FREE Delivery over ₹499. Fulfilled by Amazon.</p>
    </div>
    </div>
  )
}

export default recentlyViewedB