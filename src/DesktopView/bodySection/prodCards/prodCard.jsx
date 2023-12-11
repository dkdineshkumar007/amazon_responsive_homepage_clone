import React from 'react'
import ProdCardTemp from './prodCardTemp'
import ProdCardTempb from './prodCardTempb'
import ProdCardTemp2 from './prodCardTemp2'

const prodCard = () => {
  return (

    <div className='mx-4 mt-4 relative z-50'>

        <div className='grid grid-cols-3 xl:grid-cols-4'>
            <ProdCardTempb title={'Greats Summer Sale'} img={'./imgs/Single3.jpg'} link={'See all'}/>

            <ProdCardTemp2 title={'Trending headphones and speakers'} img1={'./imgs/crd9.jpg'} des1={'Kitchen appliances '} img2={'./imgs/crd10.jpg'} des2={'Home decor'} img3={'./imgs/crd11.jpg'} des3={'Furniture & mattresses'} img4={'./imgs/crd12.jpg'} des4={'Home improvement'} link={'See all offers'}/> 
            
            <ProdCardTemp2 title={'Starting ₹99 | Amazon Brands & more'} img1={'./imgs/crd13.jpg'} des1={'Starting ₹299 | Curatains'} img2={'./imgs/crd14.jpg'} des2={'Starting ₹299 | Storage & containers'} img3={'./imgs/crd15.jpg'} des3={'Starting ₹99 | Daily essentials'} img4={'./imgs/crd16.png'} des4={'Under ₹599 | Clothing, shoes, & more'} link={'See all offers'}/> 
            
            <div className='h-[420px] w-[350px]'>
                <div className='w-[100%] h-[150px] bg-white pt-4'>
                    <div className='width-[90%] ml-8'>
                    <p className='font-[700] text-[21px] leading-tigh2 pb-2'>Sign in for your best <br/> experience</p>
                    <button className='bg-[#FFD814] w-[90%] h-[30px] rounded-2xl'><p className='text-[13px] font-[Amazon Ember]'>Sign in securely</p></button>
                    </div>


                </div>
                <div className='w-[350px] h-[270px]'>
                    <img className='mt-6 w-[90%] h-[90%] mx-auto' src="./imgs/adver.png" alt="" />
                </div>
    </div>
         
   
        </div>
    </div>

  )
}

export default prodCard



{/* <div className='grid grid-cols-3 xl:grid-cols-4 ml-4 gap-2 gap-y-[25px] relative z-50'>
<div className='bg-white h-[420px] w-[350px]'>
        <div className='ml-4 pt-4'>
        <div>
            <p className='font-[700] text-[21px] leading-tigh2 pb-2'>Smartphones that suits <br/>your budget</p>
        </div>


        <div className='pics grid grid-cols-2 pb-4'>
            <div className='row1'>
                <div className='pb-2'>
                    <img className='h-[100px] w-[150px]' src="./imgs/mobile1.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Budget | Below <br/>₹10,000</p>
                </div>
                <div>
                <img className='h-[100px] w-[150px]' src="./imgs/mobile2.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Premium | ₹25,000 -<br/>₹40,000<br /></p>
                    
                </div>

            </div>

            <div className='row2'>

                <div className='pb-2'>
                    <img className='h-[100px] w-[150px]' src="./imgs/mobile3.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Mid range | ₹10,000 -<br/> ₹25000 </p>
                </div>

                <div>
                <img className='h-[100px] w-[150px]' src="./imgs/mobile4.jpg" alt="" />
                <p className='text-[12px] font-[Amazon Ember]'>Ultra premium | Above <br/> ₹40,000 </p>  
                </div>

            </div>


        </div>
        

        <div>
           <p className='text-[14px] text-[#007185]'>See all offers</p>
        </div>
        </div>
    </div>





    <div className='bg-white h-[420px] w-[350px]'>
        <div className='ml-4 pt-4'>
        <div>
            <p className='font-[700] text-[21px] leading-tigh2 pb-2'>SUnder ₹499 | Pocket-friendly Fashion</p>
        </div>


        <div className='pics grid grid-cols-2 pb-4'>
            <div className='row1'>
                <div className='pb-2'>
                    <img className='h-[100px] w-[150px]' src="./imgs/d1.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Budget | Below <br/>₹10,000</p>
                </div>
                <div>
                <img className='h-[100px] w-[150px]' src="./imgs/d2.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Premium | ₹25,000 -<br/>₹40,000<br /></p>
                    
                </div>

            </div>

            <div className='row2'>

                <div className='pb-2'>
                    <img className='h-[100px] w-[150px]' src="./imgs/d3.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Mid range | ₹10,000 -<br/> ₹25000 </p>
                </div>

                <div>
                <img className='h-[100px] w-[150px]' src="./imgs/d4.jpg" alt="" />
                <p className='text-[12px] font-[Amazon Ember]'>Ultra premium | Above <br/> ₹40,000 </p>  
                </div>

            </div>


        </div>
        

        <div>
           <p className='text-[14px] text-[#007185]'>See all offers</p>
        </div>
        </div>
    </div>




    
    <div className='bg-white h-[420px] w-[350px]'>
        <div className='ml-4 pt-4'>
        <div>
            <p className='font-[700] text-[21px] leading-tigh2 pb-2'>Starting ₹99 | Budget buys in <br/> books, toys & more
</p>
        </div>


        <div className='pics grid grid-cols-2 pb-4'>
            <div className='row1'>
                <div className='pb-2'>
                    <img className='h-[100px] w-[150px]' src="./imgs/c1.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Budget | Below <br/>₹10,000</p>
                </div>
                <div>
                <img className='h-[100px] w-[150px]' src="./imgs/c2.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Premium | ₹25,000 -<br/>₹40,000<br /></p>
                    
                </div>

            </div>

            <div className='row2'>

                <div className='pb-2'>
                    <img className='h-[100px] w-[150px]' src="./imgs/c3.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Mid range | ₹10,000 -<br/> ₹25000 </p>
                </div>

                <div>
                <img className='h-[100px] w-[150px]' src="./imgs/c4.jpg" alt="" />
                <p className='text-[12px] font-[Amazon Ember]'>Ultra premium | Above <br/> ₹40,000 </p>  
                </div>

            </div>


        </div>
        

        <div>
           <p className='text-[14px] text-[#007185]'>See all offers</p>
        </div>
        </div>
    </div>




    
    <div className='h-[420px] w-[350px]'>
        <div className='w-[100%] h-[150px] bg-white pt-4'>
            <div className='width-[90%] ml-8'>
            <p className='font-[700] text-[21px] leading-tigh2 pb-2'>Sign in for your best <br/> experience</p>
            <button className='bg-[#FFD814] w-[90%] h-[30px] rounded-2xl'><p className='text-[13px] font-[Amazon Ember]'>Sign in securely</p></button>
            </div>


        </div>
        <div className='w-[350px] h-[270px]'>
            <img className='w-[90%] h-[90%] mx-auto' src="./imgs/adver.png" alt="" />
        </div>
    </div>


        
    <div className='bg-white h-[420px] w-[350px]'>
        <div className='ml-4 pt-4'>
        <div>
            <p className='font-[700] text-[21px] leading-tigh2 pb-2'>Starting ₹99 | Amazon Brands & more
</p>
        </div>


        <div className='pics grid grid-cols-2 pb-4'>
            <div className='row1'>
                <div className='pb-2'>
                    <img className='h-[100px] w-[150px]' src="./imgs/g1.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Budget | Below <br/>₹10,000</p>
                </div>
                <div>
                <img className='h-[100px] w-[150px]' src="./imgs/g2.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Premium | ₹25,000 -<br/>₹40,000<br /></p>
                    
                </div>

            </div>

            <div className='row2'>

                <div className='pb-2'>
                    <img className='h-[100px] w-[150px]' src="./imgs/g3.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Mid range | ₹10,000 -<br/> ₹25000 </p>
                </div>

                <div>
                <img className='h-[100px] w-[150px]' src="./imgs/g10.jpg" alt="" />
                <p className='text-[12px] font-[Amazon Ember]'>Ultra premium | Above <br/> ₹40,000 </p>  
                </div>

            </div>


        </div>
        

        <div>
           <p className='text-[14px] text-[#007185]'>See all offers</p>
        </div>
        </div>
    </div>


        
    <div className='bg-white h-[420px] w-[350px]'>
        <div className='pt-4'>
        <div>
            <p className='font-[700] text-[21px] leading-tigh2 pb-2 ml-4'>Great Summer sale
</p>
        </div>


       <div>
        <img  className='w-[90%] mx-auto h-[320px]'src="./imgs/single1.jpg" alt="" />
       </div>
        

        <div className='pt-2'>
           <p className=' ml-4 text-[14px] text-[#007185]'>See all offers</p>
        </div>
        </div>
    </div>


        
    <div className='bg-white h-[420px] w-[350px]'>
        <div className='ml-4 pt-4'>
        <div>
            <p className='font-[700] text-[21px] leading-tigh2 pb-2'>Starting ₹79 | Home, kitchen & more
</p>
        </div>


        <div className='pics grid grid-cols-2 pb-4'>
            <div className='row1'>
                <div className='pb-2'>
                    <img className='h-[100px] w-[150px]' src="./imgs/k1.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Budget | Below <br/>₹10,000</p>
                </div>
                <div>
                <img className='h-[100px] w-[150px]' src="./imgs/k2.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Premium | ₹25,000 -<br/>₹40,000<br /></p>
                    
                </div>

            </div>

            <div className='row2'>

                <div className='pb-2'>
                    <img className='h-[100px] w-[150px]' src="./imgs/k3.jpg" alt="" />
                    <p className='text-[12px] font-[Amazon Ember]'>Mid range | ₹10,000 -<br/> ₹25000 </p>
                </div>

                <div>
                <img className='h-[100px] w-[150px]' src="./imgs/k4.jpg" alt="" />
                <p className='text-[12px] font-[Amazon Ember]'>Ultra premium | Above <br/> ₹40,000 </p>  
                </div>

            </div>


        </div>
        

        <div>
           <p className='text-[14px] text-[#007185]'>See all offers</p>
        </div>
        </div>
    </div>


        
    <div className='bg-white h-[420px] w-[350px]'>
        <div className='pt-4'>
        <div>
            <p className='font-[700] text-[21px] leading-tigh2 pb-2 ml-4'>Up to 70% off | Refurbished Products
</p>
        </div>


       <div>
        <img  className='w-[90%] mx-auto h-[290px]'src="./imgs/single2.jpg" alt="" />
       </div>
        

        <div className='pt-2'>
           <p className=' ml-4 text-[14px] text-[#007185]'>See all offers</p>
        </div>
        </div>
    </div>
</div> */}
