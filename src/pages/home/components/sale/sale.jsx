import React from "react";
import { useSaleData } from "../../service/query/useProductData";

export const Sale = ({ img }) => {
  const { data } = useSaleData();

  return (
    <div className="py-10 bg-secondry">
      <div className="container flex gap-10 justify-center items-center">
        {data?.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
