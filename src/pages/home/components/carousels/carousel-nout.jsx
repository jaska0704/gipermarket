import Slider from "react-slick";
import { useGetNout } from "../../service/query/useGetNout";
import { SampleNextArrow, SamplePrevArrow } from "./carousel_map";
import { CardPhone } from "../cards/card-phone";

function CarouselNout() {
  const { data, error } = useGetNout();
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
          {data?.map((item) => (
                  <CardPhone {...item} key={item.id} />
                ))
          }
        </Slider>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}

export default CarouselNout;
