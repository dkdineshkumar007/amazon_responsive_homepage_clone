import React from 'react'

function recentlyViewed({img,name,img2,nums,off,rate,oldrate,deldate,}) {

  
  return (
    <div>
    <div className='rvcard h-[420px] w-[160px] bg-white'>
          <img src={img}></img>
          <a href="#" className='text-[14px] text-[#007185] font-[Amazon Ember] hover:text-red-500 font-[500]'>{name}</a>
          <div className='flex items-center my-1'><img className='w-[80px] h-[15px] mr-1' src={img2} alt="" /><p className='text-[13px] text-[#007185] tracking-tight leading-tighv font-[500]'>{nums}</p></div>
          {/* <div className='flex items-center'><img className='w-[88px] h-[16.59px]' src="./imgs/bs.jpg" alt="" /><a href="#" className='text-[12px] text-[#007185]'>in PC Headsets</a></div> */}
          <div className='flex text-[12px] font-[700] h-[31px] items-center '>
          <div className=''><span className='px-[6px] py-[4px] mr-[6px] bg-[#CC0C39] rounded-sm text-white'>{off}</span></div>
          <div className='max-w-[98px]'><span className=' text-[#CC0C39]'>Summer Sale Deal</span></div>
          </div>
          <p className='text-[17px] mb-[4px] font-medium'><span className='text-[12px]'>₹</span>{rate}</p>
          <p className='text-[12px]'>M.R.P: <span className='line-through'>₹{oldrate}</span></p>
          <p className='text-[12px]'>Get it by <span className='font-[600]'>{deldate}</span></p><p className='text-[12px]'>FREE Delivery over ₹499. Fulfilled by Amazon.</p>


    </div>
</div>
   
  )
}

export default recentlyViewed

