import React from 'react'

function onePlus3card() {
  return (
    <div>
        <div className='bg-white px-4'>
            <div>
                <h5 className='text-[18px] text-[#111111] font-semibold pb-3 pt-3'>Starting r99 | Setup your home</h5>
                <img className='w-[500px] h-[200px]  object-cover rounded-md' src="https://m.media-amazon.com/images/I/41b6luiQcKL._SY400_.jpg" alt="" />
            </div>
            <div className='text-[15px] tracking-tight font-[500] pb-4'>
                <p className='opacity-90 py-1'>Bedsheets, pillows & more</p>
                <div className='flex gap-2 pb-3'>
                    <div>
                        <img className='w-[161px] h-[110px] object-cover rounded-md' src="https://m.media-amazon.com/images/I/21ei4WMDXBL._SY220_.jpg" alt="" />
                        <p className='opacity-90'>Home decor</p>

                    </div>
                    <div>
                        <img className='w-[161px] h-[110px] object-cover rounded-md' src="https://m.media-amazon.com/images/I/212RUKn66EL._SY220_.jpg" alt="" />
                        <p className='opacity-90'>Storage solutions</p>

                    </div>
                    <div>
                        <img className='w-[161px] h-[110px] object-cover rounded-md' src="https://m.media-amazon.com/images/I/11duJwf1J1L._SY220_.jpg" alt="" />
                        <p className='opacity-90'>Lighting solutions</p>

                    </div>
                </div>
                <a href="#" className='text-[#007185]'>See all offers</a>
            </div>

        </div>
    </div>
  )
}

export default onePlus3card