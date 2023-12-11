import React from 'react'
import RecentlyViewedB from './recentlyViewedB'
import RecentlyViewed from './recentlyViewed'

function recent1() {

    const slideLeft =()=>{
        var slider = document.getElementById('recent');
        slider.scrollLeft = slider.scrollLeft - 1500;
      }
    
      const slideRight =()=>{
        var slider = document.getElementById('recent');
        slider.scrollLeft = slider.scrollLeft + 1500;
      }
     


  return (
    <div className='w-[100%] bg-white'>
    <div className='px-4'>
        <div className='pb-6'>
            <div className='rcnt flex justify-between'> <div><h6 className='text-[21px] font-[Amazon Ember] font-[700] pl-2'>Customers who viewed items in your browsing history also viewed</h6></div><div>Page 1 of 5</div></div>
        </div>

       <div className='flex relative px-4'>

        <button className='absolute top-36 p-[10px] rounded border-[1px] border-slate-300' onClick={slideLeft}>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"   class="ipc-icon ipc-icon--chevron-left-inline ipc-icon--inline ipc-pager-icon text-slate-500" id="iconContext-chevron-left-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg>
        </button>

       <div id='recent' className='flex gap-2 scroll scroll-smooth scrollbar-hide overflow-auto pb-6 ml-12 mr-8'>
           
           <RecentlyViewedB img={'./imgs/rv1.jpg'} name={'MMTC_PAMP 24k (999.9) Peacock 10 g,m yellow Gold Bar'} img2={'./imgs/four.png'} nums={'105'} rate={'67,750.00'} deldate={'Thursday, May 11'}/>
           <RecentlyViewed img={'./imgs/rv2.jpg'} name={'Hp Wired On Ear Headphones With Mic With 3.5 Mm Drivers,...'} img2={'./imgs/four.png'} nums={'7,775'} off={'35% off'} rate={'649.00'} oldrate={'999.00'} deldate={'Sunday, May 7'}/>
           <RecentlyViewed img={'./imgs/rv4.jpg'} name={'Logitech H110 Wired On Ear Headphones With Mic, Stereo With Noise-Cancelling,3.5-Mm Dua...'} img2={'./imgs/four.png'} nums={'10.220'} off={'10% off'} rate={'745.00'} oldrate={'825.00'} deldate={'Sunday, May 7'}/>
           <RecentlyViewedB img={'./imgs/rv3.jpg'} name={'MMTC_PAMP 24k 999.9 Lotus pure 5 gm Gold Bar'} img2={'./imgs/four.png'} nums={'523'} rate={'37,780.00'} deldate={'Wednesday, May 10'}/>
           <RecentlyViewedB img={'./imgs/rv5.jpg'} name={'G9oogle Pixel 7 5G (Osbidian, 8GB Ram 128GB Storage)'} img2={'./imgs/four.png'} nums={'115'} rate={'44,300.00'} deldate={'Thursday, May 11'}/>
           <RecentlyViewedB img={'./imgs/rv6.jpg'} name={'MMTC-PAMP 24k (999.9) 11.6638 gm Tola Yellow Gold Coin'} img2={'./imgs/four.png'} nums={'42'} rate={'81,460.00'} deldate={'Wednesday, May 10'}/>
           <RecentlyViewed img={'./imgs/rv7.jpg'} name={'Bangalore Refinery 24k (999.9) 10 gm Yellow'} img2={'./imgs/four.png'} nums={'1125'} rate={'66,196.00'} oldrate={'72,800.00'} deldate={'Wednesday, May 10'} off={'32% off'}/>
           <RecentlyViewedB img={'./imgs/rv1.jpg'} name={'MMTC_PAMP 24k (999.9) Peacock 10 g,m yellow Gold Bar'} img2={'./imgs/four.png'} nums={'105'} rate={'67,750.00'} deldate={'Thursday, May 11'}/>
           <RecentlyViewed img={'./imgs/rv2.jpg'} name={'Hp Wired On Ear Headphones With Mic With 3.5 Mm Drivers,...'} img2={'./imgs/four.png'} nums={'7,775'} off={'35% off'} rate={'649.00'} oldrate={'999.00'} deldate={'Sunday, May 7'}/>
           <RecentlyViewed img={'./imgs/rv4.jpg'} name={'Logitech H110 Wired On Ear Headphones With Mic, Stereo With Noise-Cancelling,3.5-Mm Dua...'} img2={'./imgs/four.png'} nums={'10.220'} off={'10% off'} rate={'745.00'} oldrate={'825.00'} deldate={'Sunday, May 7'}/>
           <RecentlyViewedB img={'./imgs/rv3.jpg'} name={'MMTC_PAMP 24k 999.9 Lotus pure 5 gm Gold Bar'} img2={'./imgs/four.png'} nums={'523'} rate={'37,780.00'} deldate={'Wednesday, May 10'}/>
           <RecentlyViewedB img={'./imgs/rv5.jpg'} name={'G9oogle Pixel 7 5G (Osbidian, 8GB Ram 128GB Storage)'} img2={'./imgs/four.png'} nums={'115'} rate={'44,300.00'} deldate={'Thursday, May 11'}/>
           <RecentlyViewedB img={'./imgs/rv6.jpg'} name={'MMTC-PAMP 24k (999.9) 11.6638 gm Tola Yellow Gold Coin'} img2={'./imgs/four.png'} nums={'42'} rate={'81,460.00'} deldate={'Wednesday, May 10'}/>
           <RecentlyViewed img={'./imgs/rv7.jpg'} name={'Bangalore Refinery 24k (999.9) 10 gm Yellow'} img2={'./imgs/four.png'} nums={'1125'} rate={'66,196.00'} oldrate={'72,800.00'} deldate={'Wednesday, May 10'} off={'32% off'}/>
           <RecentlyViewedB img={'./imgs/rv1.jpg'} name={'MMTC_PAMP 24k (999.9) Peacock 10 g,m yellow Gold Bar'} img2={'./imgs/four.png'} nums={'105'} rate={'67,750.00'} deldate={'Thursday, May 11'}/>
           <RecentlyViewed img={'./imgs/rv2.jpg'} name={'Hp Wired On Ear Headphones With Mic With 3.5 Mm Drivers,...'} img2={'./imgs/four.png'} nums={'7,775'} off={'35% off'} rate={'649.00'} oldrate={'999.00'} deldate={'Sunday, May 7'}/>
           <RecentlyViewed img={'./imgs/rv4.jpg'} name={'Logitech H110 Wired On Ear Headphones With Mic, Stereo With Noise-Cancelling,3.5-Mm Dua...'} img2={'./imgs/four.png'} nums={'10.220'} off={'10% off'} rate={'745.00'} oldrate={'825.00'} deldate={'Sunday, May 7'}/>
           <RecentlyViewedB img={'./imgs/rv3.jpg'} name={'MMTC_PAMP 24k 999.9 Lotus pure 5 gm Gold Bar'} img2={'./imgs/four.png'} nums={'523'} rate={'37,780.00'} deldate={'Wednesday, May 10'}/>
           <RecentlyViewedB img={'./imgs/rv5.jpg'} name={'G9oogle Pixel 7 5G (Osbidian, 8GB Ram 128GB Storage)'} img2={'./imgs/four.png'} nums={'115'} rate={'44,300.00'} deldate={'Thursday, May 11'}/>
           <RecentlyViewedB img={'./imgs/rv6.jpg'} name={'MMTC-PAMP 24k (999.9) 11.6638 gm Tola Yellow Gold Coin'} img2={'./imgs/four.png'} nums={'42'} rate={'81,460.00'} deldate={'Wednesday, May 10'}/>
           <RecentlyViewed img={'./imgs/rv7.jpg'} name={'Bangalore Refinery 24k (999.9) 10 gm Yellow'} img2={'./imgs/four.png'} nums={'1125'} rate={'66,196.00'} oldrate={'72,800.00'} deldate={'Wednesday, May 10'} off={'32% off'}/>
       </div>

       
       <button className='absolute right-0 top-36 p-[10px] rounded border-[1px] border-slate-300 ' onClick={slideRight}>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-pager-icon" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg>
        </button>

       </div>

    </div>
    
    </div>
  )
}

export default recent1