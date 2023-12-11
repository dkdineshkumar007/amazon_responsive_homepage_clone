import React from 'react'
import ProdCardTemp from './prodCardTemp'
import ProdCardTemp2 from './prodCardTemp2'

function prodCard3() {
  return (
    <div>
         <div className='mx-4 mt-4'>

<div className='grid grid-cols-3 xl:grid-cols-4'>
    <ProdCardTemp title={'Upto 70% off | Refurbished Products'} img={'./imgs/cdb2.jpg'} link={'See all offers'}/>

    <ProdCardTemp2 title={'Shop & Pay using Amazon | Earn rewards daily'} img1={'https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Pay__Win0.5x._SY116_CB616103432_.jpg'} des1={'Bluetooth earbuds | Up to 75% off'} img2={'https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Shop__collect0.5x._SY116_CB616103432_.jpg'} des2={'Neckbands | Starting Rs.499'} img3={'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg'} des3={'Bluetooth Speakers'} img4={'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg'} des4={'Home Theatre System'} link={'See all offers'}/> 

    <ProdCardTemp2 title={'Starting ₹119 | Amazon Brands & more'} img1={'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_1QC2_1x._SY116_CB662999955_.jpg'} des1={'See more'} img2={'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_2QC2_1x._SY116_CB662999955_.jpg'} des2={'Starting r299 | Kitchen & dining'} img3={'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_3QC2_1x._SY116_CB662999955_.jpg'} des3={'Starting r199 | Toys & baby products'} img4={'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_4QC2_1x._SY116_CB662999955_.jpg'} des4={'Under r599 | Clothing, shoes and more'} link={'See all offers'}/>                                                                                                                                                          

    <ProdCardTemp title={'Up to 75% off | Mice, keyboard, laptop bags &...'} img={'./imgs/cdb3.jpg'} link={'See all offers'}/>
</div>
</div>
    </div>
  )
}

export default prodCard3