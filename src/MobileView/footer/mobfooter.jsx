import React from 'react'

function footer() {
  return (
    <div>
        <div className='w-[100%]'>
            <div className='h-[50px] bg-[#37475A] flex flex-col items-center justify-center text-white font-semibold'>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-caret-up-fill" viewBox="0 0 16 16"> <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg></p>
                <p className='text-[11px]'>TOP OF PAGE</p>

            </div>
            <div className='grid grid-cols-2 bg-slate-800 text-[16px] font-semibold text-white p-4'>
              <div>
                <ul className='flex flex-col gap-y-4'>
                  <li>Your Amazon.in</li>
                  <li>Amazon Pay</li>
                  <li>Wish List</li>
                  <li>Your Account</li>
                  <li>Returns</li>
                  <li>Customer Service</li>
                </ul>
              </div>
              <div>
              <ul className='flex flex-col gap-y-4'>
                  <li>Your orders</li>
                  <li>Amazon App Download</li>
                  <li>Find a Wish List</li>
                  <li>Your Recently Viewed Items</li>
                  <li>Sell</li>
                 
                  

                </ul>

              </div>

            </div>

        </div>

    </div>
  )
}

export default footer