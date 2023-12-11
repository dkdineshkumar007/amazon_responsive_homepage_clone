import React from 'react'

function prodCardTemp({title,img,link}) {
  return (


    <div className='h-[420px] w-[350px] bg-white'>
        <div className='px-4 mb-4 mt-4 text-[21px] font-[700] font-[Amazon Ember] break-words'>{title}</div>
        <div className=''><img src={img} className='px-4 object-cover h-[305px] cursor-pointer'></img></div>
        <div className='mt-4 mb-4 text-[13px] text-[#007185] font-semibold px-4 cursor-pointer '>{link}</div>
        
    </div>

   
  )
}

export default prodCardTemp