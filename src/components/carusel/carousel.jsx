import React from "react";
import Slider from "react-slick";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../pages/home/components/carousels/carousel_map";

function Carousel() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container w-screen">
      <Slider {...settings}>
        <div>
          <img className="w-full" src="/optimize1.png" alt="" />
        </div>
        <div>
          <img className="w-full" src="/optimize1.png" alt="" />
        </div>
        <div>
          <img className="w-full" src="/optimize1.png" alt="" />
        </div>
        <div>
          <img className="w-full" src="/optimize1.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
