import Slider from "react-slick";
import { useGetData } from "../../service/query/useGetData";
import { SampleNextArrow, SamplePrevArrow } from "./carousel_map";
import { CardCategory } from "../cards/card-category";

function CaruselCategory() {
  const { data, error } = useGetData();

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const changeTab = (bat) => {
    set;
  };

  //   const

  return (
    <div className="">
      <Slider className="text-center" {...settings}>
        {data?.map((item) => (
          <CardCategory {...item} key={item.id}/>
        ))}
      </Slider>
    </div>
  );
}

export default CaruselCategory;
