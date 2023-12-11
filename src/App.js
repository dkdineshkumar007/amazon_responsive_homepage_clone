
import React from 'react'
import Navbar from './DesktopView/header/Navbar'

import Footer from './DesktopView/footer/footer'
import Carousel from './DesktopView/header/carousel'
import ProdCard from './DesktopView/bodySection/prodCards/prodCard'
import Slider1 from './DesktopView/bodySection/slidersandScrollSections/slidersAndScrollSection/slider1'

import Slidersample from './DesktopView/bodySection/slidersandScrollSections/slidersAndScrollSection/slidersample'
import ImgSlidertemplate from './DesktopView/bodySection/slidersandScrollSections/slidersAndScrollSection/imgSlidertemplate'
import ImgSlider2 from './DesktopView/bodySection/slidersandScrollSections/slidersAndScrollSection/imgSlider2'
import Banner1 from './MobileView/bodySection/mobileAds/banner1'
import Banner2 from './MobileView/bodySection/mobileAds/banner2'
import Slider2 from './DesktopView/bodySection/slidersandScrollSections/slidersAndScrollSection/slider2'
import Slider3 from './DesktopView/bodySection/slidersandScrollSections/slidersAndScrollSection/slider3'
import ProdCard2 from './DesktopView/bodySection/prodCards/prodCard2'
// import Slider1 from './slideder1/slider1'
import Signin from './DesktopView/footer/signin'
import Recent1 from './DesktopView/bodySection/recentlyviewed/recent1'
import ProdCard3 from './DesktopView/bodySection/prodCards/prodCard3'
import Mobnav from './MobileView/header/mobnav'
import Mobcat from './MobileView/bodySection/mobSlidersAndScrollers/mobcat'
import Mobilecaro from './MobileView/header/mobilecaro'
import Mslider1 from './MobileView/bodySection/mobSlidersAndScrollers/mslider1'
import Curated from './MobileView/bodySection/mobSlidersAndScrollers/curated'
import Grid1 from './MobileView/bodySection/grids/grid1'
import Grid2 from './MobileView/bodySection/grids/grid2'
import Grid3 from './MobileView/bodySection/grids/grid3'
import Grid4 from './MobileView/bodySection/grids/grid4'
import Mobcat2 from './MobileView/bodySection/mobSlidersAndScrollers/mobcat2'
import CWO1 from './MobileView/bodySection/productCards/CWO1'
import CWO2 from './MobileView/bodySection/productCards/CWO2'
import CW03 from './MobileView/bodySection/productCards/CWO3'
import CWO3 from './MobileView/bodySection/productCards/CWO3'
import Category from './MobileView/bodySection/mobSlidersAndScrollers/Category'
import Mobfooter from './MobileView/footer/mobfooter'
import ProductAsNav from './MobileView/bodySection/others/productAsNav'
import ProductAsNav2 from './MobileView/bodySection/others/productAsNav2'
import OnePlus3card from './MobileView/bodySection/productCards/onePlus3card'
import OnePlus3card2 from './MobileView/bodySection/productCards/onePlus3Card2'
import OfferDealFourTile from './MobileView/bodySection/productCards/offerDealFourTile'



function App() {
  return (

    <div className='bg-slate-200 '>

    
    <div className='hidden sm:hidden lg:block'> 
    <Navbar/>
   
   <div className='w-[100%] bg-slate-200'>
     
   

   <div className='max-w-[1500px] mx-auto'>
   
   <Carousel/>

   <div className='-mt-[200px] mb-4'>
  <ProdCard/>
  </div>
  <ProdCard3/>



  <Slidersample/>
  <Banner1/>
  

 <ImgSlidertemplate/>

 <ImgSlider2/>

 

 <Slider1/>
 <Slider2/>
 <Slider3/>
 <Banner2/>
 
 <ProdCard2/>



     
   </div>
   <Signin/>
   <Recent1/>




 
  </div>
   <Footer/>

   
   </div>
   <div className='lg:hidden'>

<Mobnav/>
<Mobcat/>

 <Mobilecaro/>
 <Mslider1/>
 <ProductAsNav/>

<Curated/>
<Grid1/>
<Grid2/>
<Grid3/>
<Grid4/>
<Mobcat2/>
<CWO1/>
<CWO2/>
<CWO3/>
<Category/>

<ProductAsNav2/>
<OnePlus3card/>
<OnePlus3card2/>
<Mobfooter/>
<OfferDealFourTile/>
<Mobcat/>
<Mobcat/>
<Mobcat/>
 
</div>



    </div>

  
  )
}

export default App


