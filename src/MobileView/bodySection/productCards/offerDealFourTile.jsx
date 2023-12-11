import React from 'react'

function offerDealFourTile() {
 const data=[
{id:1,
img:'https://m.media-amazon.com/images/I/71Sfsvy7PIL._AC_SY310_.jpg',
off:'36%',
deal:'Deal of the day'},
{id:2,
img:'https://m.media-amazon.com/images/I/81Gi+0M4rXL._AC_SY310_.jpg',
off:'32%',
deal:'Deal of the day'},
{id:3,
img:'https://m.media-amazon.com/images/I/91EqpLgE63L._AC_SY310_.jpg',
off:'47%',
deal:'Deal of the day'},
{id:4,
img:'https://m.media-amazon.com/images/I/A1QGDNpoaeL._AC_SY310_.jpg',
off:'27%',
deal:'Deal of the day'},
]
  return (
    <div>
        <div className='bg-white px-4'>
        <h5 className='text-[18px] font-semibold'>Deals For you on top brands</h5>
        <div className='grid grid-cols-2 bg-white gap-2 '>
        {
          
          data.map((item)=>(

            <div className='mobcard bg-white w-[216px] h-[216.5px]'>
                <div className='h-[187px] w-[187px] bg-slate-50 mb-3'><img className='w-[171px] h-[171px] object-contain' src={item.img} alt="" /></div>
                
                <p className='text-[11px] text-[#CC0C39]'><span className='px-[4px] py-[6px] bg-[#CC0C39] text-white mr-2'>{item.off}</span>{item.deal}</p>
            </div>
           
          )
          )
          
          }

        </div>
        <a href="#" className='text-[#007185] text-[15px]'>See all deals</a>

        </div>
    </div>
  )
}

export default offerDealFourTile