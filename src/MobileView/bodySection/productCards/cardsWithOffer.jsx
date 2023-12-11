import React from 'react'

function cardsWithOffer({txt,img1,l1,img2,l2,img3,l3,img4,l4,r1,r2,r3,r4,link,f1,f2,f3,f4}) {
  return (
    <div className='bg-white flex justify-center'>
        <div className=''>
            <h5 className='text-[18px] text-[#111111] font-semibold py-[8px] max-w-[380px] break-words'>{txt}</h5>
            <div className='grid grid-cols-2 gap-x-2 gap-y-2 tracking text-[15px] text-[#0f1111]'>

                <div className=' relative '>
                    <div><img  src={img1} className='px-4  py-2 bg-slate-100 h-[187px] w-[187px] object-contain' alt="" /></div>
                    <p className='text-[15px] font-semibold '>{l1}</p>
                    <p className='text-[18px] font-semibold' ><span className='text-[12px]'>₹</span>{r1}<span className='text-[12px]'>00</span></p>
                    <div className='text-[10px] w-[35px] h-[35px] flex flex-col items-center justify-center leading-tight absolute top-2 left-2 bg-red-700 text-white rounded-[50%]'><p>{f1}</p><p>off</p>
                    </div>
                </div>
                <div className=' relative '>
                    <div><img  src={img2} className='px-4  py-2 bg-slate-100 h-[187px] w-[187px] object-contain' alt="" /></div>
                    <p className='text-[15px] font-semibold '>{l2}</p>
                    <p className='text-[18px] font-semibold' ><span className='text-[12px]'>₹</span>{r2}<span className='text-[12px]'>00</span></p>
                    <div className='text-[10px] w-[35px] h-[35px] flex flex-col items-center justify-center leading-tight absolute top-2 left-2 bg-red-700 text-white rounded-[50%]'><p>{f2}</p><p>off</p>
                    </div>
                </div> 
                <div className=' relative'>
                    <div><img  src={img3} className='px-4  py-2 bg-slate-100 h-[187px] w-[187px] object-contain' alt="" /></div>
                    <p className='text-[15px] font-semibold '>{l3}</p>
                    <p className='text-[18px] font-semibold' ><span className='text-[12px]'>₹</span>{r3}<span className='text-[12px]'>00</span></p>
                    <div className='text-[10px] w-[35px] h-[35px] flex flex-col items-center justify-center leading-tight absolute top-2 left-2 bg-red-700 text-white rounded-[50%]'><p>{f3}</p><p>off</p>
                    </div>
                </div>
                <div className=' relative'>
                    <div><img  src={img4} className='px-4  py-2 bg-slate-100 h-[187px] w-[187px] object-contain' alt="" /></div>
                    <p className='text-[15px] font-semibold '>{l4}</p>
                    <p className='text-[18px] font-semibold' ><span className='text-[12px]'>₹</span>{r4}<span className='text-[12px]'>00</span></p>
                    <div className='text-[10px] w-[35px] h-[35px] flex flex-col items-center justify-center leading-tight absolute top-2 left-2 bg-red-700 text-white rounded-[50%]'><p>{f4}</p><p>off</p>
                    </div>
                </div>

            </div>
            {/* <a href="#" className='text-[#007185] text-[15px] pt-[8px]'>{link}</a> */}



        </div>
    </div>
  )
}

export default cardsWithOffer