import React from 'react'

import './mobstyle.css'

const arr=[


{id:1,
img:'./imgs/mmc1 (1).png',
txtt:'Footwear'},

{id:3,
img:'./imgs/mmc1 (2).png',
txtt:'Home Appliances'},

{id:4,
img:'./imgs/mmc1 (3).png',
txtt:'Kitchen'},

{id:5,
img:'./imgs/mmc1 (4).png',
txtt:'Furniture'},

{id:6,
img:'./imgs/mmc1 (5).png',
txtt:'Beauty'},

{id:7,
img:'./imgs/mmc1 (6).png',
txtt:'Essentials'},

{id:8,
img:'./imgs/mmc1 (7).png',
txtt:'Mobiles'},

{id:9,
img:'./imgs/mmc1 (8).png',
txtt:'Books'},

{id:10,
img:'./imgs/mmc1 (9).png',
txtt:'Men Grooming'},

{id:11,
img:'./imgs/mmc2.png',
txtt:'Men Grooming'},

{id:12,
img:'./imgs/mmc3.png',
txtt:'Men Grooming'},

{id:13,
img:'./imgs/mmc4.png',
txtt:'Men Grooming'}

]

function mobcat2() {
  return (
    <div>

        <div className='w-[100%] bg-white'>
            <h5 className='pl-2 pt-2 text-[18px] font-semibold'>Top Deals in featured categories</h5>
            <div className='overflow-auto scroll scrollbar-hide scroll-smooth flex gap-3 overflow-y-hidden py-3 px-2'>
                
            {
          
       arr.map((item)=>(

            <div className='mobcard bg-white w-[74px] text-center'>
                <div className='h-[50px] w-[50px]'><img src={item.img} className=' object-contain' alt="" /></div>
                
                <p className='text-[12px] '>{item.txtt}</p>
            </div>
           
          )
          )
          
          }




       


            
               
                
            </div>



        </div>
        
    </div>
  )
}

export default mobcat2