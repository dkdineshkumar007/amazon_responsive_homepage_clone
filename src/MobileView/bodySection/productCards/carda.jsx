import React from 'react'

function carda({img,l1,img2,l2,img3,l3,img4,l4}) {
  return (
    <div>
        <div className='h-[180px] w-[175px] bg-white rounded-md pt-4'>
            <div className='grid grid-cols-2 gap-y-4 text-[12px] '>
                <div className='w-[84px] text-center '>
                    <img className='w-[52px] mx-auto
                    ' src={img} alt="" />
                    <a href="#">{l1}</a>
                </div>
                <div className='w-[84px] text-center '>
                    <img className='w-[52px] mx-auto
                    ' src={img2} alt="" />
                    <a href="#">{l2}</a>
                </div>
                <div className='w-[84px] text-center '> 
                    <img className='w-[52px] mx-auto
                    ' src={img3} alt="" />
                    <a href="#">{l3}</a>
                </div>
                <div className='w-[84px] text-center '> 
                    <img className='w-[52px] mx-auto
                    ' src={img4} alt="" />
                    <a href="#">{l4}</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default carda