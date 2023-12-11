import React from 'react'

const arr=[
{
id:1,
img:'https://m.media-amazon.com/images/I/41sNIBa5dFL._SR540,200_.jpg',
txt:'T-shirts, kurtis, sarees & more | Under ₹499'
},
{
id:2,
img:'https://m.media-amazon.com/images/I/31rpzxE0u1L._SR540,200_.jpg',
txt:'Best Selling Electronics Under r1,999'
},
{
id:3,
img:'https://m.media-amazon.com/images/I/31a6C2k0CsL._SR540,200_.jpg',
txt:'Health and personal care | Starting r149'
},
{
id:4,
img:'https://m.media-amazon.com/images/I/41lq80tvoSL._SR540,200_.jpg',
txt:'Samrtphones | Starting r6,999'
},
{
id:5,
img:'https://m.media-amazon.com/images/I/41Sidv0d6WL._SR540,200_.jpg',
txt:'Books | Under r499'
},
{
id:6,
img:'https://m.media-amazon.com/images/I/51SOWPvhgqL._SR540,200_.png',
txt:'Fitness & Sports | Under r999'
},
{
id:7,
img:'https://m.media-amazon.com/images/I/615Ij7metsL._SR540,200_.jpg',
txt:'Jewellery | Starting r99'
},
{
id:8,
img:'https://m.media-amazon.com/images/I/41JScNOHEsL._SR540,200_.jpg',
txt:'See all Categories'
}

]

function curated() {
  return (
    <div>
        <div className='bg-white px-4'>
            <h5 className='text-[18px] font-semibold py-2'>Curated stores for you</h5>
            <div className='grid grid-cols-2 gap-2'>


            {         
          arr.map((item)=>(
           
            <div className=''>
                <img src={item.img} className='rounded-md' alt="" />
                <p className='text-[15px] font-semibold tracking-tight text-[#0F1111]'>{item.txt}</p>
            </div>
          )
          )    
          }

            </div>

        <a className='text-[15px] text-[#007185]'>See more</a>
        </div>
    </div>
  )
}

export default curated