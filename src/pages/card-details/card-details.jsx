import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetData } from "../home/service/query/useGetData";
import { StarRatings } from "../../components/stars/star-ratings";
import { useGetCardDetails } from "../home/service/query/useGetCardDetails";

export const CardDetails = ({ img, title, newPrice, price }) => {
  const { datakey, id } = useParams();
  const { data } = useGetData();
  const [state, setState] = React.useState(false);
  const { data: data1 } = useGetCardDetails(datakey, id);
  console.log(data1);
  console.log(title);

  const likeProduct = () => {
    setState(!state);
  };

  return (
    <div className="container">
      <div className=" flex justify-between items-center">
        {data?.map((item) => (
          <Link key={item.id} to={`/cards/${item.datakey}`}>
            {item.title}
          </Link>
        ))}
      </div>
      <div>
        <h2 className="font-jost font-semibold text-[24px] leading-[36px] mt-10">
          {data1?.title}
        </h2>
        <div>
          <div className="flex justify-between py-5 border-b-2">
            <div className="flex gap-10">
              <StarRatings />
              <div className="flex gap-3">
                <button onClick={likeProduct}>
                  {state ? (
                    <img className="w-[20px]" src="/heart-like.png" alt="" />
                  ) : (
                    <img className="w-[20px]" src="/heart.png" alt="" />
                  )}
                </button>
                <p>В избранное</p>
              </div>
            </div>
            <div className="flex">
              <span>арт.</span>
              <p>14979</p>
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center gap-4 my-5">
          <div className="w-[35%]">
            <img className="w-full" src={data1?.img} alt="" />
          </div>
          <div className="w-[35%]">
            <div>
              <h2 className="font-jost font-medium text-lg leading-[20px]">
                Объем памяти
              </h2>
              <p>128GB</p>
            </div>
            <div>
              <h2 className="font-jost font-medium text-lg leading-[20px]">
                Характеристики
              </h2>
              <div>
                <span className="font-jost text-base leading-[20px] text-[#999999]">
                  Цвет:
                </span>
                <span> белый</span>
              </div>
              <div>
                <span className="font-jost text-base leading-[20px] text-[#999999]">
                  экран :
                </span>
                <span> 6.2"/2400x1080 Пикс</span>
              </div>
              <div>
                <span className="font-jost text-base leading-[20px] text-[#999999]">
                  оперативная память:
                </span>
                <span> 8GB</span>
              </div>
              <div>
                <span className="font-jost text-base leading-[20px] text-[#999999]">
                  память:
                </span>
                <span> 128GB</span>
              </div>
              <div>
                <span className="font-jost text-base leading-[20px] text-[#999999]">
                  4 камеры:
                </span>
                <span>64/12/12</span>
              </div>
              <div>
                <span className="font-jost text-base leading-[20px] text-[#999999]">
                  беспроводные интерфейсы:
                </span>
                <span> NFC, Wi-Fi, Bluetooth 5.0</span>
              </div>
              <p>{data1?.subtitle}</p>
            </div>
          </div>
          <div className="border w-[30%] p-2">
            <div className="flex justify-between">
              <p className=" font-jost font-medium text-[20px] line-through text-slate-400">
                {data1?.price * 12450} Сум
              </p>
              <p className="font-jost font-medium text-[20px] bg-red-500 text-white p-1">
                {(
                  ((data1?.price - data1?.newPrice) * 100) /
                  data1?.price
                ).toFixed(2)}
                %
              </p>
            </div>
            <h2 className="font-jost text-[36px] font-semibold">
              {data1?.newPrice * 12450} Сум
            </h2>
            <button className="w-full py-3 bg-primary">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};
