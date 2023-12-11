import React from 'react' 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function mobilecaro() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className=''>
      <div className='w-[100%] h-[360px]'>
        <Carousel responsive={responsive} showDots={true}  autoPlay={true} arrows={false}>

          <div className='mask'><img className='' src="./imgs/ms1.jpg" alt="" /></div>
          <div className='mask'><img className='' src="./imgs/ms2.jpg" alt="" /></div>
          <div className='mask'><img className='' src="./imgs/ms3.jpg" alt="" /></div>
          <div className='mask'><img className='' src="./imgs/ms4.jpg" alt="" /></div>
          <div className='mask'><img className='' src="./imgs/ms5.jpg" alt="" /></div>
          <div className='mask'><img className='' src="./imgs/ms6.jpg" alt="" /></div>
          <div className='mask'><img className='' src="./imgs/ms7.jpg" alt="" /></div>
          <div className='mask'><img className='' src="./imgs/ms8.jpg" alt="" /></div>
          <div className='mask'><img className='' src="./imgs/ms9.jpg" alt="" /></div>
         
        </Carousel>
        
      </div>
    </div>
  )
}

export default mobilecaro