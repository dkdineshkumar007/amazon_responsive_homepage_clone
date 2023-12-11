import React from 'react'

function signin() {
  return (
    <div className='w-[100%] bg-white mt-4'>

        <div className='pb-6'> 
            <hr />
            <div className='flex flex-col items-center justify-center pt-8 pb-4'>
                <p className='text-[13px] font-[Amazon Ember]'>See Personalised recommendations</p>
                <a href="#" className='px-[20px] my-[5px] py-[5px] bg-[#f0c14b] w-[230px] text-center rounded-md text-[13px] font-[Amazon Ember]'>Sign in</a>
                <p className='text-[11px] font-[Amazon Ember]'>New customer?<span><a href="#" className='hover:text-red-500 text-[#007185] mx-[4px]'>Start here.</a></span></p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default signin