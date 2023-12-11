import React from 'react'
import ProdCardTemp from './prodCardTemp'
import ProdCardTemp2 from './prodCardTemp2'

function prodCard2() {
  return (
    <div className='mx-4 mt-4'>

        <div className='grid grid-cols-3 xl:grid-cols-4'>
            <ProdCardTemp title={'Upto 70% off | Refurbished Products'} img={'./imgs/cdb2.jpg'} link={'See all offers'}/>

            <ProdCardTemp2 title={'Trending headphones and speakers'} img1={'./imgs/crd5.jpg'} des1={'Bluetooth earbuds | Up to 75% off'} img2={'./imgs/crd6.jpg'} des2={'Neckbands | Starting Rs.499'} img3={'./imgs/crd7.jpg'} des3={'Bluetooth Speakers'} img4={'./imgs/crd8.jpg'} des4={'Home Theatre System'} link={'See all offers'}/> 

            <ProdCardTemp2 title={'Starting ₹119 | Amazon Brands & more'} img1={'./imgs/crd1.jpg'} des1={'See more'} img2={'./imgs/crd2.jpg'} des2={'Starting ₹299 | Kitchen & dining'} img3={'./imgs/crd3.jpg'} des3={'Starting ₹199 | Toys & baby products'} img4={'./imgs/crd4.png'} des4={'Under ₹599 | Clothing, shoes and more'} link={'See all offers'}/>                                                                                                                                                          

            <ProdCardTemp title={'Up to 75% off | Mice, keyboard, laptop bags &...'} img={'./imgs/cdb3.jpg'} link={'See all offers'}/>
        </div>
    </div>
  )
}

export default prodCard2