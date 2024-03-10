import React from "react";
import { Link } from "react-router-dom";

export const CardCategory = ({ title, img, datakey, id }) => {
  return (
    <Link to={`/cards/${datakey}`} className="w-[250px] h-[110px] text-center flex justify-between items-center shadow-lg p-4 my-5">
      <img className="w-[100px] h-[100px]" src={img} alt="" />
      <h2>{title}</h2>
    </Link>
  );
};
