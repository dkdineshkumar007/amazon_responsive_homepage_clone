
import React from 'react'

const datas=[
{id:1,
img:'https://m.media-amazon.com/images/I/416XDHjoV6L._SX520_SY664_.jpg',
text:'Find the perfect gift for Mothers day'
},
{id:3,
img:'https://m.media-amazon.com/images/I/41shNFc8goL._SX520_SY664_.jpg',
text:'Summer cooling fest'
},
{id:4,
img:'https://m.media-amazon.com/images/I/51w2Iop0r4L._SX520_SY664_.jpg',
text:'Summer reads'
},
{id:5,
img:'https://m.media-amazon.com/images/I/61AgKCxZ1FL._SX520_SY664_.jpg',
text:'No Screen summer with Alexa'
},
{id:6,
img:'https://m.media-amazon.com/images/I/51V3+PhJ8xL._SX520_SY664_.jpg',
text:'Cycles from local shop'
},
{id:7,
img:'https://m.media-amazon.com/images/I/41vXeMFz6pL._SX520_SY664_.jpg',
text:'Cricket carnival'
},
{id:8,
img:'https://m.media-amazon.com/images/I/61TtnD5xkhL._SX520_SY664_.jpg',
text:'Next gen store'
},

{id:10,
img:'https://m.media-amazon.com/images/I/51pFhofj--L._SX520_SY664_.jpg',
text:'Spring/Summer 23'
}
]


function mslider3() {
  return (
    <div>
    <div className='bg-[#FFF3F2] w-[100%] px-4 py-3'>
        <div className='pb-2'>
        <h5 className='text-[18px] font-[700] text-[#111111]'>Budget friendly stores</h5>
        <p className='tracking-tight text-[#111111] font-[500]'>Fashion, electronics,home & more</p>
        </div>
        
        <div className='w-[100%] bg-[#FFF3F2]'>
            <div className='overflow-auto scroll scrollbar-hide scroll-smooth flex gap-2 overflow-y-hidden'>
                
            {
          
          datas.map((item)=>(

            <div className='mobcard bg-[#FFF3F2] w-[160px] h-[255px]'>
                <div className='h-[203px] w-[160px]'><img src={item.img} className=' object-contain' alt="" /></div>
                
                <p className='text-[15px] font-semibold tracking-tight text-[#0F1111]'>{item.text}</p>
            </div>
           
          )
          )
          
          }


               
                
            </div>



        </div>
    </div>
</div>
  )
}

export default mslider3