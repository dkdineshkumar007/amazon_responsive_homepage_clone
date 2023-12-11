import React, { useState } from 'react'
import './navstyle.css'



function Mobnav() {
    
    function openNav() {
        document.getElementById("myNav").style.display = "block";
      }
    function closeNav() {
        document.getElementById("myNav").style.display = "none";
    }


  return (
    <div>
        
        <div id="myNav" className="z-[10] relative overlay w-[80%] duration-100  md:w-[50%] lg:[25%] left-0 lg:left-[75%]">
   
   <div class="overlay-content">
    <div className='py-6 bg-slate-800'>
        <div className='bg-slate-800 text-white pr-4 font-semibold flex items-center justify-end'><a href="#" className='mr-2'>Sign in</a><img className='w-[25px] h-[25px] object-contain' src="./imgs/mobuser.png" alt="" /></div>
        <div className='flex flex-col font-semibold items-start pl-6 text-white tracking-tight leading-tight'>
            <p className='text-[20px]'>Browse</p>
            <p className='text-[28px] -mt-1'>Amazon</p>
        </div>
    </div>
       <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
       <div className='flex items-center justify-between px-6 py-4 border-b-[5px]'><h5 class="text-[20px] font-semibold tracking-tight">Amazon Home</h5><svg className='w-[25px] h-[25px] font-[700]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"/></svg></div>
       
       <div className='py-4 border-b-[5px] px-6'>
        <ul className='flex flex-col items-start gap-6 text-[16px] tracking-tight text-[#111111] font-[500]'>
            <li><h5 className='text-[20px] font-semibold opacity-100'>Trending</h5></li>
            <li><a className='opacity-90' href="">Best Sellers</a></li>
            <li><a className='opacity-90' href="">New Releases</a></li>
            <li><a className='opacity-90' href="">Movers and Shakers</a></li>
        </ul>
       </div>
       <div className='py-4 border-b-[5px] px-6'>
        <ul className='flex flex-col items-start gap-6 text-[16px] tracking-tight text-[#111111] font-[500]'>
            <li><h5 className='text-[20px] font-semibold opacity-100'>Top Categories for you</h5></li>
            <li><a className='opacity-90' href="">Mobiles</a></li>
            <li><a className='opacity-90' href="">Computers</a></li>
            <li><a className='opacity-90' href="">Books</a></li>
            <li><a className='opacity-90' href="">Amazon Fashion</a></li>
            <li><a className='opacity-90' href="">See All Categories</a></li>
        </ul>
       </div>

       <div className='py-4 border-b-[5px] px-6'>
        <ul className='flex flex-col items-start gap-6 text-[16px] tracking-tight text-[#111111] font-[500]'>
            <li><h5 className='text-[20px] font-semibold opacity-100'>Programs and Features</h5></li>
            <li><a className='opacity-90' href="">Today's Deals</a></li>
            <li><a className='opacity-90' href="">Amazon Pay</a></li>
            <li><a className='opacity-90' href="">Try Prime </a></li>
            <li><a className='opacity-90' href="">See on Amazon</a></li>
            <li><a className='opacity-90' href="">Style Feed</a></li>
        </ul>
       </div>
       <div className='py-4 border-b-[5px] px-6'>
        <ul className='flex flex-col items-start gap-6 text-[16px] tracking-tight text-[#111111] font-[500]'>
            <li><h5 className='text-[20px] font-semibold opacity-100'>Programs and Features</h5></li>
            <li><a className='opacity-90' href="">Today's Deals</a></li>
            <li><a className='opacity-90' href="">Amazon Pay</a></li>
            <li><a className='opacity-90' href="">Try Prime </a></li>
            <li><a className='opacity-90' href="">See on Amazon</a></li>
            <li><a className='opacity-90' href="">Style Feed</a></li>
        </ul>
       </div>

   </div>

</div>


            <div className='w-100% p-2 bg-slate-800' >
                <div className='flex h-[45px] justify-between items-center text-[13px] font-semibold font-[Amazon Ember] px-2'>
                    <div className='flex gap-2'>
                    <a href="#" ><img src="./imgs/amazonmob.png" onClick={openNav} alt="" className='w-[20px] h-[20px]'/></a>
                    <a href="#" className='flex'><img src="./imgs/amamob.png" className='w-[80px] h-[27px]' alt="" /><p className='text-white'>.in</p></a>
                       
                    </div>
                    <div className='flex gap-1'> 
                        <a href="" className='text-white'>Sign in &gt;</a>
                        <a href=""> <img src="./imgs/mobuser.png"  className='h-[27px] w-[35px] object-contain'alt="" /></a>
                        <a href="" className='mx-2'> <img src="./imgs/mobcart.png" className='h-[27px] w-[35px] object-contain' alt="" /></a>

                    </div>
                </div>
                <div>
                    <div className='search flex w-full'>
                    
                        <input type='text' className='h-[44px] w-full pl-[12px] placeholder:font-medium rounded-l-md' placeholder='Search Amazon.in'></input>
                        <button className=' w-[50px] bg-[#febd69] pl-[14px] rounded-r-md' ><img src='imgs\loupe.png' className='w-[20px]'></img></button>

                    </div>
                </div>

                <div className='text-[15px] text-white font-semibold'>
                    <p className='text-whitw text-[11px] -mb-1 pt-1'>Shop By</p>
                    <ul className='flex gap-4 '>
                        <li>Category</li>
                        <li>Wish List</li>
                        <li>Deals</li>
                        <li>Sell</li>
                    </ul>

                </div>
            </div>
            <div className='flex items-center py-[12px] px-[10px] bg-slate-700'> 
                    <img src="./imgs/map.png" className='h-[20px] w-[20px]' alt="" />
                    <p className='text-white font-semibold mx-2 text-[13px]'>Select a location to see product availability</p>
                </div>

    </div>
  )
}

export default Mobnav