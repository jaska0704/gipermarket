import React from "react";
import Carousel from "../../components/carusel/carousel";
import CaruselCategory from "./components/carousels/carusel-category";
import CarouselCardPhone from "./components/carousels/carousel-cardPhone";
import { Sale } from "./components/sale/sale";
import { useGetData } from "./service/query/useGetData";
import { useGetPhone } from "./service/query/useGetPhone";
import { useGetNout } from "./service/query/useGetNout";
import { ProductsCard } from "./components/cards/products-card";
import CarouselNout from "./components/carousels/carousel-nout";
import { CardDetails } from "../card-details/card-details";

export const Home = () => {
  const { data } = useGetData();
  const { data: dataP } = useGetPhone();
  const { data: dataN } = useGetNout();

  return (
    <div>
      <Carousel />
      <CaruselCategory />
      <CarouselCardPhone />
      <Sale />
      <div className="flex gap-6 container py-11">
        <div>
          {dataP?.slice(0, 4).map((item) => {
            return <ProductsCard {...item} key={item.id} />;
          })}
        </div>
        <div>
          {dataN?.slice(0, 4).map((item) => {
            return <ProductsCard {...item} key={item.id} />;
          })}
        </div>
        <div>
          {dataP?.slice(0, 4).map((item) => {
            return <ProductsCard {...item} key={item.id} />;
          })}
        </div>
      </div>
      <CarouselCardPhone />
      <CarouselNout />
      <CardDetails/>
    </div>
  );
};
