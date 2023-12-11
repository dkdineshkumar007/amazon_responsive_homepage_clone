import React from 'react'

function cardc({img}) {
  return (
    <div>
        <div className='h-[180px] w-[135px] rounded-md'>
            
            
            <img src={img} className='object-contain rounded-md' alt="" />
          
            

        </div>
    </div>
  )
}

export default cardc