import React from 'react'
import { mobcdata } from './mobcatarr'
import './mobstyle.css'

function mobcat() {
  return (
    <div>

        <div className='w-[100%] bg-white'>
            <div className='overflow-auto scroll scrollbar-hide scroll-smooth flex gap-6 overflow-y-hidden py-3 px-2'>
                
            {
          
          mobcdata.map((item)=>(

            <div className='mobcard bg-white w-[74px]'>
                <div className='h-[50px] w-[50px]'><img src={item.img} className=' object-contain' alt="" /></div>
                
                <p className='text-[12px]'>{item.text}</p>
            </div>
           
          )
          )
          
          }




       


            
               
                
            </div>



        </div>
        
    </div>
  )
}

export default mobcat