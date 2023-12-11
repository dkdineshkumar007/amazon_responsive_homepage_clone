import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class productAsNav2 extends Component {
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
            <h5 className="text-[18px] font-semibold">Deals under ₹500</h5>
            <div className="w-[382px] h-[220px] pt-2 mb-6" ><img className="h-[220px] mx-auto object-contain flex items-center justify-center" 
            src="https://m.media-amazon.com/images/I/414Cwv2guxL._AC_SY440_.jpg" alt="" /></div>
            
            <p className="text-[11px] text-[#CC0C39] font-[700]"><span className="px-[4px] py-[6px] rounded-sm text-white bg-[#CC0C39] mr-2 ">90%off</span>Deal of the Day</p>
                        <p className="text-[18px] font-semibold text-[#0F1111] pt-2">₹599.00 <span className="text-[12px] font-semibold text-[#0F1111] line-through">M.R.P.:₹820.00</span></p>
            <p className="text-[15px] tracking-tight font-semibold text-[#0F1111]">beatXP Kitchen Scale Multipurpose Portable...</p>
          </div>


          <div className="">
          <h5 className="text-[18px] font-semibold">Deals under ₹500</h5>
            <div className="w-[382px] h-[220px] pt-2 mb-6" ><img className="h-[220px] mx-auto object-contain flex items-center justify-center" 
            src="https://m.media-amazon.com/images/I/41kcDbjR5sL._AC_SY440_.jpg" alt="" /></div>
            
            <p className="text-[11px] text-[#CC0C39] font-[700]"><span className="px-[4px] py-[6px] rounded-sm text-white bg-[#CC0C39] mr-2 ">29% off</span>Deal of the Day</p>
            <p className="text-[18px] font-semibold text-[#0F1111] pt-2">₹450.00 <span className="text-[12px] font-semibold text-[#0F1111] line-through">M.R.P.:₹620.00</span></p>
            <p className="text-[15px] tracking-tight font-semibold text-[#0F1111]">Amazon Brand-Presto! Barbage bags</p>
          </div>


          <div className="">
          <h5 className="text-[18px] font-semibold">Deals under ₹500</h5>
            <div className="w-[382px] h-[220px] pt-2 mb-6" ><img className="h-[220px] mx-auto object-contain flex items-center justify-center" 
            src="https://m.media-amazon.com/images/I/31rnoD9lqRL._AC_SY440_.jpg" alt="" /></div>
            
            
            <p className="text-[11px] text-[#CC0C39] font-[700]"><span className="px-[4px] py-[6px] rounded-sm text-white bg-[#CC0C39] mr-2 ">50% off</span>Deal of the Day</p>
            <p className="text-[18px] font-semibold text-[#0F1111] pt-2">₹399.00 <span className="text-[12px] font-semibold text-[#0F1111] line-through">M.R.P.:₹800.00</span></p>
            <p className="text-[15px] tracking-tight font-semibold text-[#0F1111]">Storia 100% tender coconut water</p>
          </div>


          <div className="">
          <h5 className="text-[18px] font-semibold">Deals under ₹500</h5>
            <div className="w-[382px] h-[220px] pt-2 mb-6" ><img className="h-[220px] mx-auto object-contain flex items-center justify-center" 
            src="https://m.media-amazon.com/images/I/510e8O+ut5L._AC_SY440_.jpg" alt="" /></div>
            
            
            <p className="text-[11px] text-[#CC0C39] font-[700]"><span className="px-[4px] py-[6px] rounded-sm text-white bg-[#CC0C39] mr-2 ">22%off</span>Deal of the Day</p>
            <p className="text-[18px] font-semibold text-[#0F1111] pt-2">₹329.00 <span className="text-[12px] font-semibold text-[#0F1111] line-through">M.R.P.:₹420.00</span></p>
            <p className="text-[15px] tracking-tight font-semibold text-[#0F1111]">Presto! 2 ply Kitchen Tissue/Towel paper</p>
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

            <div className=""> <img className="w-[70px] h-[70px] bg-slate-50 object-contain" 
            src="https://m.media-amazon.com/images/I/414Cwv2guxL._AC_SY172_.jpg" alt="" /></div>
            <div className=""><img className="w-[70px] h-[70px] bg-slate-50 object-contain" 
            src="https://m.media-amazon.com/images/I/41kcDbjR5sL._AC_SY172_.jpg" alt="" /></div>
            <div className=""><img className="w-[70px] h-[70px] bg-slate-50  object-contain" 
            src="https://m.media-amazon.com/images/I/31rnoD9lqRL._AC_SY172_.jpg" alt="" /></div>
            <div className=""><img className="w-[70px] h-[70px] bg-slate-50 object-contain" 
            src="https://m.media-amazon.com/images/I/510e8O+ut5L._AC_SY172_.jpg" alt="" /></div>         

        </Slider>
      <a className="text-[#007185] font-semibold text-[15px]">See all deals</a>
      </div>
    );
  }
}