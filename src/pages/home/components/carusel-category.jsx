import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useGetData } from "../service/query/useGetData";
import { request } from "../../../config/request";
import axios from "axios";
import { SampleNextArrow, SamplePrevArrow } from "./carousel_map";

function CaruselCategory() {
    const { data, error } = useGetData();

    console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data?.map((item) => (
          <div className="border">
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CaruselCategory;
