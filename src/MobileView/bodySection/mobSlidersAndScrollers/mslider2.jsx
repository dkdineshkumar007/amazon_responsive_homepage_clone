
import React from 'react'

const datas=[
{id:1,
img:'https://m.media-amazon.com/images/I/61XV7WouwlL._SX520_SY664_.jpg',
text:'Pocket-friendly fashoin under R499'
},
{id:3,
img:'https://m.media-amazon.com/images/I/51mF2LnFfVL._SX520_SY664_.jpg',
text:'Mobile, covers & more starting $99'
},
{id:4,
img:'https://m.media-amazon.com/images/I/61CxWlAR7hL._SX520_SY664_.jpg',
text:'Home and kitchen | Starting Rs.79'
},
{id:5,
img:'https://m.media-amazon.com/images/I/61w0v2sqg0L._SX520_SY664_.jpg',
text:'daily essentials | Starting R199'
},
{id:6,
img:'https://m.media-amazon.com/images/I/61AAf8p3LgL._SX520_SY664_.jpg',
text:'Electronics under r1,999'
},
{id:7,
img:'https://m.media-amazon.com/images/I/61PFkOhxjIL._SX520_SY664_.jpg',
text:'Books, Toys and more starting r99'
},
{id:8,
img:'https://m.media-amazon.com/images/I/61p5Z2VRxaL._SX520_SY664_.jpg',
text:'Amazon brands and more under r499'
},
{id:9,
img:'https://m.media-amazon.com/images/I/61SsRbs4ZVL._SX520_SY664_.jpg',
text:'Small business products under r999'
},
{id:10,
img:'https://m.media-amazon.com/images/I/61F2wrZe7wL._SX520_SY664_.jpg',
text:'Grocery essentials uner r99 | Amazon fresh'
}
]


function mslider2() {
  return (
    <div>
    <div className='bg-white w-[100%] px-4 py-4'>
        <div className='pb-2'>
        <h5 className='text-[18px] font-[700] text-[#111111]'>Budget friendly stores</h5>
        <p className='tracking-tight text-[#111111] font-[500]'>Fashion, electronics,home & more</p>
        </div>
        
        <div className='w-[100%] bg-white'>
            <div className='overflow-auto scroll scrollbar-hide scroll-smooth flex gap-2 overflow-y-hidden pb-3'>
                
            {
          
          datas.map((item)=>(

            <div className='mobcard bg-white w-[160px] h-[255px]'>
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

export default mslider2