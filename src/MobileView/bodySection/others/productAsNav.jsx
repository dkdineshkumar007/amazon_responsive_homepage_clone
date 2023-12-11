import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class productAsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className="bg-white px-4 pb-4">

        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}
          className=""  
        >

          <div className="">
            <h5 className="text-[18px] font-semibold">Starting ₹199 | Deals on fashion, beauty, kitchen and more</h5>
            <div className="w-[382px] h-[220px] pt-2 mb-6" ><img className="h-[220px] mx-auto object-contain flex items-center justify-center" src="https://m.media-amazon.com/images/I/4188O416veS._AC_SY440_.jpg" alt="" /></div>
            
            <p className="text-[11px] text-[#CC0C39] font-[700]"><span className="px-[4px] py-[6px] rounded-sm text-white bg-[#CC0C39] mr-2 ">₹449 and under</span>Deal of the Day</p>
            <p className="text-[15px] tracking-tight font-semibold text-[#0F1111] mt-2">Super saving deals on Duffle, Gym Bags</p>
          </div>


          <div className="">
          <h5 className="text-[18px] font-semibold">Starting ₹199 | Deals on fashion, beauty, kitchen and more</h5>
            <div className="w-[382px] h-[220px] pt-2 mb-6" ><img className="h-[220px] mx-auto object-contain flex items-center justify-center" 
            src="https://m.media-amazon.com/images/I/51y-agMtCuL._AC_SY440_.jpg" alt="" /></div>
            
            <p className="text-[11px] text-[#CC0C39] font-[700]"><span className="px-[4px] py-[6px] rounded-sm text-white bg-[#CC0C39] mr-2 ">₹500 and under</span>Deal of the Day</p>
            <p className="text-[15px] tracking-tight font-semibold text-[#0F1111] mt-2">Deals on Acnos Watches</p>
          </div>


          <div className="">
          <h5 className="text-[18px] font-semibold">Starting ₹199 | Deals on fashion, beauty, kitchen and more</h5>
            <div className="w-[382px] h-[220px] pt-2 mb-6" ><img className="h-[220px] mx-auto object-contain flex items-center justify-center" 
            src="https://m.media-amazon.com/images/I/41s0tEfjlrL._AC_SY440_.jpg" alt="" /></div>
            
            
            <p className="text-[11px] text-[#CC0C39] font-[700]"><span className="px-[4px] py-[6px] rounded-sm text-white bg-[#CC0C39] mr-2 ">₹470 and under</span>Deal of the Day</p>
            <p className="text-[15px] tracking-tight font-semibold text-[#0F1111] mt-2">Watches for Gifting</p>
          </div>


          <div className="">
          <h5 className="text-[18px] font-semibold">Starting ₹199 | Deals on fashion, beauty, kitchen and more</h5>
            <div className="w-[382px] h-[220px] pt-2 mb-6" ><img className="h-[220px] mx-auto object-contain flex items-center justify-center" 
            src="https://m.media-amazon.com/images/I/51hI38DdfIL._AC_SY440_.jpg" alt="" /></div>
            
            
            <p className="text-[11px] text-[#CC0C39] font-[700]"><span className="px-[4px] py-[6px] rounded-sm text-white bg-[#CC0C39] mr-2 ">₹399 and under</span>Deal of the Day</p>
            <p className="text-[15px] tracking-tight font-semibold text-[#0F1111] mt-2">Cute Bags for girls</p>
          </div>


        </Slider>
        
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          className="h-[100px] pt-4 ml-6">

            <div className=""> <img className="w-[70px] h-[70px] bg-slate-50 object-contain" src="https://m.media-amazon.com/images/I/4188O416veS._AC_SY172_.jpg" alt="" /></div>
            <div className=""><img className="w-[70px] h-[70px] bg-slate-50 object-contain" src="https://m.media-amazon.com/images/I/51y-agMtCuL._AC_SY172_.jpg" alt="" /></div>
            <div className=""><img className="w-[70px] h-[70px] bg-slate-50  object-contain" src="https://m.media-amazon.com/images/I/41s0tEfjlrL._AC_SY172_.jpg" alt="" /></div>
            <div className=""><img className="w-[70px] h-[70px] bg-slate-50 object-contain" src="https://m.media-amazon.com/images/I/51hI38DdfIL._AC_SY172_.jpg" alt="" /></div>         

        </Slider>
      <a className="text-[#007185] font-semibold text-[15px]">See all deals</a>
      </div>
    );
  }
}