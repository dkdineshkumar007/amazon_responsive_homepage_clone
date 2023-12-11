import React from 'react'
import Carda from '../productCards/carda'
import Cardb from '../productCards/cardb'
import Cardc from '../productCards/cardc'
import './ms.css'
import Fourcarda from '../productCards/fourcarda'
import Mslider2 from './mslider2'
import Mslider3 from './mslider3'

function mslider1() {
  return (
    <div>
        <div className='' class='scrollbar-hide h-[190px] gap-2 flex overflow-auto scroll scroll-smooth mt-[-110px] relative'>
            
            <Carda img={'./imgs/mi1.jfif'} l1={'Amazon pay'} img2={'./imgs/mi2.jfif'}  l2={'Recharge'} img3={'./imgs/mi3.jfif'} l3={'Rewards'} img4={'./imgs/mi4.jfif'} l4={'Pay Bills'}/>
           
            
            
            <Cardb txt={'Keep Shopping for'} img={'https://m.media-amazon.com/images/I/618RPRwsF9L._AC_SS250_.jpg'}/>
            <Cardc img={'https://m.media-amazon.com/images/I/316MeVNfViL._SR270,360_.jpg'}/>

            <Cardc img={'https://m.media-amazon.com/images/I/41sCf8eLA-L._SR270,360_.jpg'}/>

            <Cardc img={'https://m.media-amazon.com/images/I/61Y+09OXXiL._SR270,360_.jpg'}/>

            <Cardc img={'https://m.media-amazon.com/images/I/41Ao1CdXNIL._SR270,360_.jpg'}/>

            <Cardc img={'https://m.media-amazon.com/images/I/41kAheHGerL._SR270,360_.jpg'}/>

            <Cardc img={'https://m.media-amazon.com/images/I/41COrSZIx6L._SR270,360_.jpg'}/>

            <Cardc img={'https://m.media-amazon.com/images/I/31CG5s2HvXL._SR270,360_.jpg'}/>
            <Cardc img={'https://m.media-amazon.com/images/I/51lHWL2qbKL._SR270,360_.jpg'}/>
            <Cardc img={'https://m.media-amazon.com/images/I/31ymyeU5-cL._SR270,360_.jpg'}/>
            <Carda img={'./imgs/mi5.jpg'} l1={'Under R499'} img2={'./imgs/mi6.jpg'}  l2={'Under R199'} img3={'./imgs/mi7.jpg'} l3={'Under R499'} img4={'./imgs/mi8.jpg'} l4={'Under R499'} />
            <Carda img={'./imgs/mi9.jpg'} l1={'Under R499'} img2={'./imgs/mi10.jpg'}  l2={'Under R199'} img3={'./imgs/mi11.jpg'} l3={'Under R499'} img4={'./imgs/mi12.jpg'} l4={'Under R499'} />
            
        
        
        
        
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/51vYDtDAXlL._SR1242,140_.jpg" className='mb-2' alt="" />
        </div>
        <div>
            <img src="./imgs/mbanner3a.gif" className=''  alt="" />
        </div>
        <div>
          <Fourcarda txt={'Pocket Friendly Stores'} img1={'https://m.media-amazon.com/images/I/31t0jAW8FoL._SR420,420_.jpg'} l1={'Top Picks under ₹199 '} img2={'https://m.media-amazon.com/images/I/31E71zRxUCL._SR420,420_.jpg'} l2={'Top picks under ₹299'} img3={'https://m.media-amazon.com/images/I/31BZoGXNQlL._SR420,420_.jpg'} l3={'Top picks under ₹399'} img4={'https://m.media-amazon.com/images/I/31utcnt9VkL._SR420,420_.jpg'} l4={'Top picks under ₹499'} link={'See more'}/>
          <Fourcarda txt={'Clothing, footwear & more'} img1={'https://m.media-amazon.com/images/I/61KWFQk77IL._SR420,420_.png'} l1={'Under r499 | Kurtas and sarees '} img2={'https://m.media-amazon.com/images/I/617t4j-AfxL._SR420,420_.png'} l2={'Starting r99 | Skin care '} img3={'https://m.media-amazon.com/images/I/61ip+qU0RUL._SR420,420_.png'} l3={'Under r799 | Footwear'} img4={'https://m.media-amazon.com/images/I/61gBZwTi8KL._SR420,420_.png'} l4={'Under r499 | Watches, backpacks & more'} link={'Mega Fashoin ways'}/>
          
          <Fourcarda txt={'Minimum 60% off | Pocket friendly styles'} 
          img1={'https://m.media-amazon.com/images/I/71ZSCoOaQ0L._SR420,420_.jpg'} l1={'Kurtas sarees and more'} 
          img2={'https://m.media-amazon.com/images/I/61gQDxDwaNL._SR420,420_.jpg'} l2={'T-shirt, jeans and more '} 
          img3={'https://m.media-amazon.com/images/I/713RZYMQT9L._SR420,420_.jpg'} l3={'Tops dresses and more'} 
          img4={'https://m.media-amazon.com/images/I/71crGHpVi5L._SR420,420_.jpg'} l4={'Kid\'s t-shirts, dresses and more'} 
          link={'See all'}/>


<Fourcarda txt={'Minimum 60% off | Pocket friendly styles'} 
          img1={'https://m.media-amazon.com/images/I/615ylYZ1N8L._SR420,420_.png'} l1={'Cleaning and laundry'} 
          img2={'https://m.media-amazon.com/images/I/61n-5LKEqEL._SR420,420_.png'} l2={'Tea & Coffee'} 
          img3={'https://m.media-amazon.com/images/I/61nAunYXhnL._SR420,420_.png'} l3={'Oil &ghee'} 
          img4={'https://m.media-amazon.com/images/I/61luDRb+ftL._SR420,420_.png'} l4={'Baby diapers & wipes'} 
          link={'See More'}/>



<Fourcarda className='' txt={'Minimum 40% off | Fresh deals on fiction eBooks'} 
          img1={'https://m.media-amazon.com/images/I/41yuTS-NsvL._SR420,420_.jpg'} l1={'Literature and fiction'} 
          img2={'https://m.media-amazon.com/images/I/412KW+MAwZL._SR420,420_.jpg'} l2={'Romance'} 
          img3={'https://m.media-amazon.com/images/I/41qDuyAC0uL._SR420,420_.jpg'} l3={'Crime, Thriller & Mystery'} 
          img4={'https://m.media-amazon.com/images/I/413joDTULYL._SR420,420_.jpg'} l4={'Teens, Children & Young adults'} 
          link={'See all eBooks'}/>

<Mslider2/>
<Mslider3/>



        </div>

    </div>
  )
}

export default mslider1