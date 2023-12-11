import React from 'react'

function footer() {
  return (
    <footer className='mt-4'>
        <div className='mainfoot'>
                <div className='b2T h-[50px] bg-[#37475A] flex items-center justify-center text-[14px] text-[white] font-medium' >
                    <a>Back to Top</a>
                </div>

                <div>
                    <div className='flex space-x-[100px] px-[20%] justify-center py-[50px] text-white bg-[#232f3e]'>
                        <ul className='text-[#DDDDDD] font-[Amazon Ember] text-[14px] leading-loose '>
                            <li className='text-[16px] font-bold text-white'>Get to know Us</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press Releases</li>
                            <li>Amazon Science</li>
                           
                        </ul>
                        <ul className='text-[#DDDDDD] font-[Amazon Ember] text-[14px] leading-loose '>
                            <li className='text-[16px] font-bold text-white'>Connect with Us</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                        <ul className='text-[#DDDDDD] font-[Amazon Ember] text-[14px] leading-loose '>
                            <li className='text-[16px] font-bold text-white'>Make Money with Us</li>
                            <li>Sell on Amazon</li>
                            <li>Sell under Amazon Accelerator</li>
                            <li>Protect and Build Your Brand</li>
                            <li>Amazon Global Selling</li>
                            <li>Become an Affiliate</li>
                            <li>Fulfilment by Amazon</li>
                            <li>Advertise Your Products</li>
                            <li>Amazon Pay on Merchants</li>
                        </ul>
                        <ul className='text-[#DDDDDD] font-[Amazon Ember] text-[14px] leading-loose '>
                            <li className='text-[16px] font-bold text-white'>Let Us Help You</li>
                            <li>COVID-19 and Amazon</li>
                            <li>Your Account</li>
                            <li>Returns Centre</li>
                            <li>100% Purchase Protection</li>
                            <li>Amazon App Download</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    <hr className='text-gray-400 border-w-0 bg-gray-400'></hr>
                    <div className='bg-[#232f3e] py-[35px] text-[#DDDDDD]'>
                        <div className='flex justify-center gap-[100px]'>
                            <img src='imgs\amazonlogo.png' className='w-20'></img>
                            <div>
                                <a>English</a>
                            </div>
                        </div>
                        <div className='text-[#DDDDDD] text-[14px] justify-center pt-[25px]'>
                            <ul className='flex justify-center space-x-[10px]'>
                                <li>Australia</li>
                                <li>Brazil</li>
                                <li>Canada</li>
                                <li>China</li>
                                <li>France</li>
                                <li>Germany</li>
                                <li>Italy</li>
                                <li>Japan</li>
                                <li>Mexico</li>
                                <li>Netherlands</li>
                                <li>Poland</li>
                                <li>Poland</li>
                                <li>Singapore</li>
                                <li>Spain</li>
                                <li>Turkey</li>
                                <li>United Arab Emirates</li>
                            </ul>
                            <ul className='flex justify-center space-x-[10px]'>
                                <li>United Kingdom</li>
                                <li>United qStates</li>
                            </ul>
                        </div>
                    </div>

                </div>
        </div>
        <div className='subFooter flex justify-center space-x-[100px] py-12 text-[12px] text-white bg-[#131A22]'>
            <div className='flex flex-col space-y-4 text-[#DDDDDD]'>
                <ul>
                    <li className='font-medium'>AbeBooks</li>
                    <li className='text-[#999999]'>Books, art <br></br>& collectibles</li> 
                </ul>
                <ul>
                <li className='font-medium'>Shopbop</li>
                <li className='text-[#999999]'>Designer <br></br>Fashion Brands</li> 
                </ul>
            </div>
            <div className='flex flex-col space-y-4 text-[#DDDDDD]'>
                <ul>
                <li className='font-medium'>Amazon Web Services</li>
                <li className='text-[#999999]'>Scalable Cloud <br></br>Computing Services</li>
                
                </ul>
                <ul>
                <li className='font-medium'>Amazon Business</li>
                <li className='text-[#999999]'>Everything for <br></br> Your Business</li>  
                </ul>
                
            </div>
            <div className='flex flex-col space-y-4 text-[#DDDDDD]'>
            <ul>
                <li className='font-medium'>Audible</li>
                <li className='text-[#999999]'>Download <br></br>Audio Books</li>
                

                </ul>
                <ul>
                <li>Prime Now</li>
                <li className='text-[#999999]'>2-Hour Delivery <br></br>on Everyday items</li>   
                </ul>
                
            </div>
            <div className='flex flex-col space-y-4 text-[#DDDDDD]'>
            <ul>
                <li className='font-medium'>DPReview</li>
                <li className='text-[#999999]'>Digital<br></br>Photography</li>
                </ul>
                <ul>
                <li className='font-medium'>Amazon Prime Music</li>
                <li className='text-[#999999]'>90 million songs, ad-free<br></br>Over 15 million podcast episodes</li>
                
                    
                </ul>
                
            </div>
            <div className='flex flex-col space-y-4 text-[#DDDDDD]'>
            <ul>
                <li className='font-medium'>IMDb</li>
                <li className='text-[#999999]'>Movies, TV<br></br>& Celebrities</li>
                </ul>
            </div>

        </div>
        <div className='copyrights'>
            <div className=' text-[12px] text-white bg-[#131A22] flex flex-col pb-[30px]'>
                <ul className='flex justify-center'>
                    <li>Conditions of Use & Sale</li>
                    <li>Privacy Notice</li>
                    <li>Interest-Based Ads</li>
                </ul>
                
                <p className='flex justify-center'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    </footer>
  )
}

export default footer