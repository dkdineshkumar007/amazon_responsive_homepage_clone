import React from 'react'

function cardb({txt,img}) {
  return (
    <div>
        <div className='h-[180px] w-[135px] bg-white rounded-md py-2'>
            <div className='w-[127px] object-contain'>
            <p className='text-[15px] tracking-tight font-semibold'>{txt}</p>
            <img src={img} className='px-1 object-contain' alt="" />
            </div>
            

        </div>
    </div>
  )
}

export default cardb