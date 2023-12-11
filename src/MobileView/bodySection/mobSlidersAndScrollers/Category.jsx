import React from 'react'

function Category() {
  return (
    <div className='w-[100%]'>
        <div className='bg-white'>
            <h5 className='text-[18px] pl-[4%] py-2 font-semibold'>Featured Categories</h5>
            <div className='flex text-[15px] font-[600] gap-2 items-center justify-center'>
                <div className='w-[121px] h-[286px]'>
                <img src="https://m.media-amazon.com/images/I/41oLL0iztcL._SX294_.jpg" className='rounded-md w-[121px] h-[235px]' alt="" />
                <p>Mobiles & Electronics</p>
                </div>
                <div className='w-[121px] h-[286px]'>
                <img src="https://m.media-amazon.com/images/I/61xulfHiRGL._SX294_.png" className='rounded-md w-[121px] h-[235px]' alt="" />
                <p>Amazon Fashion</p>
                </div>
                <div className='w-[121px] h-[286px]'>
                <img src="https://m.media-amazon.com/images/I/41G1ET7T5DL._SX294_.jpg" className='rounded-md w-[121px] h-[235px]' alt="" />
                <p>Home & Kitchen</p>
                </div>
            </div>
            <div className='flex text-[15px] justify-between border-t-slate-200 border-b-slate-200 p-4 border mx-4 border-l-0 border-r-0'>
                <a href="#">See all categories</a>
                <a href="#">&gt;</a>
            </div>
        </div>
    </div>
  )
}

export default Category