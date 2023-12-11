import React from 'react'
import './navstyle.css'

function Navbar() {
    // function openNav() {
    //     document.getElementById("myNav2").style.display = "block";
    //   }
    // function closeNav() {
    //     document.getElementById("myNav2").style.display = "none";
    // }

  return (
    <nav>


<div id="myNav2" className="z-[100] relative overlay w-[80%] duration-100  md:w-[50%] lg:[25%] left-0 lg:left-[75%]">
   
   <div class="overlay-content">
    <div className='py-6 bg-slate-800'>
        <div className='bg-slate-800 text-white pr-4 font-semibold flex items-center justify-end'><a href="#" className='mr-2'>Sign in</a><img className='w-[25px] h-[25px] object-contain' src="./imgs/mobuser.png" alt="" /></div>
        <div className='flex flex-col font-semibold items-start pl-6 text-white tracking-tight leading-tight'>
            <p className='text-[20px]'>Browse</p>
            <p className='text-[28px] -mt-1'>Amazon</p>
        </div>
    </div>
       <a href="javascript:void(0)" class="closebtn" >&times;</a>
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
        
   <div className='navb'>

    <div className='mainNav bg-[#0F1111] h-[60px] flex items-center justify-around px-2'>
        <div className='logo flex'>
            <img src='imgs\amazonlogo.png' className='w-24'></img><span className='text-white
            '>.in</span>
        </div>
        <div className='text-white'>
            <p className='pl-[22px] text-[12px] leading-tight text-[#cccccc]'>Hello</p>
            <span className='flex'><img src='imgs\map.png' className='w-[20px] h-[20px]'></img>
            <p className='text-[14px] leading-tight font-bold pl-[2px] '>Select your address</p></span>
            
        </div>

        <div className='search flex'>
            <button className='h-[40px] w-[50px] bg-slate-100 text-[12px] text-slate-600 font-[Amazon Ember] rounded-l-md' >All</button>
            <input type='text' className='w-[1000px] h-[40px] pl-[12px] placeholder:font-medium' placeholder='Search Amazon.in'></input>
            <button className='h-[40px] w-[50px] bg-[#febd69] pl-[14px] rounded-r-md' ><img src='imgs\loupe.png' className='w-[20px]'></img></button>

        </div>

        <div className='country flex text-white pt-2'>
            <span><img src="imgs\india.png" className='w-6'></img></span>
            <a className='cntry font-medium pl-[4px]'>EN</a>
        </div>

        <div className='text-white'>
            <p className='text-[12px] leading-none tracking-tight'>Hello,Sign in</p>
            <p className='14px font-medium leading-none tracking-tight'>Account & Lists</p>
        </div>

        <div className='text-white'>
            <p className='text-[12px] leading-none tracking-tight'>Returns</p>
            <p className='14px font-medium leading-none tracking-tight'>& orders</p>
        </div>

        <div className='flex text-white'>
            <span><img src='imgs\cart.png' className='w-12'></img></span>
            <p className='pt-4'>Cart</p>
        </div>

    </div>

    <div className='subNav flex items-center justify-between h-[40px] bg-[#232f3e] px-4 font-[Amazon Ember] font-semibold'>
        <div className='links box-border'>
            <ul className='flex text-[14px] text-white  box-content'>
                <li  className='flex cursor-pointer border-box  hover:border-[1px] px-2 py-[4px]  hover:border-[#FFFFFF]'><img src='imgs\menuicon.png' className='w-[22px]'></img><span className='pl-[4px]'>All</span></li>
                <li className='cursor-pointer border-box  hover:border-[1px] px-2 py-[4px] hover:border-[#FFFFFF]'>Amazon miniTV</li>
                <li className='cursor-pointer border-box  hover:border-[1px] px-2 py-[4px] hover:border-[#FFFFFF]'>Sell</li>
                <li className='cursor-pointer border-box  hover:border-[1px] px-2 py-[4px] hover:border-[#FFFFFF]'>Best Sellers</li>
                <li className='cursor-pointer border-box  hover:border-[1px] px-2 py-[4px] hover:border-[#FFFFFF]'>Mobiles</li>
                <li className='cursor-pointer border-box  hover:border-[1px] px-2 py-[4px] hover:border-[#FFFFFF]'>Today's Deals</li>
                <li className='cursor-pointer border-box  hover:border-[1px] px-2 py-[4px] hover:border-[#FFFFFF]'>Customer Service</li>
                <li className='cursor-pointer border-box  hover:border-[1px] px-2 py-[4px] hover:border-[#FFFFFF]'>Electronics</li>
                <li className='cursor-pointer border-box  hover:border-[1px] px-2 py-[4px] hover:border-[#FFFFFF]'>Prime</li>
                <li className='cursor-pointer border-box  hover:border-[1px] px-2 py-[4px] hover:border-[#FFFFFF]'>New Releases</li>
                <li className='cursor-pointer border-box  hover:border-[1px] px-2 py-[4px] hover:border-[#FFFFFF]'>Amazon pay</li>
            </ul>

        </div>
           
        <div className='text-white text-[15px]'>
            <a className='cursor-pointer border-box px-2 py-[4px] hover:border-[1px] hover:border-[#FFFFFF]'>New launches from Mobiles, Electronics & More | Shop now</a>
        </div>

    </div>

   </div>
  
    </nav>
  )
}

export default Navbar