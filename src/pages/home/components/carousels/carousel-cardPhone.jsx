import Slider from "react-slick";
import { useGetPhone } from "../../service/query/useGetPhone";
import { SampleNextArrow, SamplePrevArrow } from "./carousel_map";
import { CardPhone } from "../cards/card-phone";

function CarouselCardPhone() {
  const { data, error } = useGetPhone();

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  try {
    return (
      <div className="">
        <Slider {...settings}>
          {data?.map((item) => {
            return <CardPhone {...item} key={item.id} />;
          })}
        </Slider>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}

export default CarouselCardPhone;
