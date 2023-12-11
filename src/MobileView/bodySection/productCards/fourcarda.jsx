import React from 'react'

function fourcarda({txt,img1,l1,img2,l2,img3,l3,img4,l4,link}) {
  return (
    <div className='bg-white flex justify-center'>
        <div className=''>
            <h5 className='text-[18px] text-[#111111] font-semibold py-[8px] max-w-[380px] break-words'>{txt}</h5>
            <div className='grid grid-cols-2 gap-x-4 gap-y-2 tracking text-[15px] text-[#0f1111]'>

                <div className='w-[187px]'>
                    <img  src={img1} alt="" />
                    <p>{l1}</p>
                </div>
                <div className='w-[187px]'>
                    <img  src={img2} alt="" />
                    <p>{l2}</p>
                </div>
                <div className='w-[187px]'>
                    <img  src={img3} alt="" />
                    <p>{l3}</p>
                </div>
                <div className='w-[187px]'>
                    <img  src={img4} alt="" />
                    <p>{l4}</p>
                </div>

            </div>
            <a href="#" className='text-[#007185] text-[15px] pt-[8px]'>{link}</a>



        </div>
    </div>
  )
}

export default fourcarda
