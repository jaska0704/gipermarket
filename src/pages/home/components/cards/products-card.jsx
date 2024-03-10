import React from "react";

export const ProductsCard = ({ img, title, price, newPrice }) => {
  return (
    <div className="w-[450px] h-[300px] text-center flex gap-5 justify-between items-center shadow-lg p-4 my-4">
      <img className="w-[200px] h-[200px]" src={img} alt="" />
      <div className=" flex flex-col gap-3">
        <h2>{title}</h2>
        <div className="flex gap-3">
          <p className="text-sm line-through text-slate-400">
            {price * 12200} Сум
          </p>
          <p className="font-semibold">{newPrice * 12200} Сум</p>
        </div>
      </div>
    </div>
  );
};
