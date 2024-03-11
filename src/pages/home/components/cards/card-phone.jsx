import React from "react";
import { loadState } from "../../../../config/storage";
import { Link } from "react-router-dom";

export const CardPhone = ({ img, title, price, newPrice, id, datakey }) => {
  const [state, setState] = React.useState(false);
  const user = loadState("user")

  const likeProduct = () => {
    setState(!state);
  };
  const addCart = ()=> {
    if(!user){
      alert(
        "Пожалуйста, сначала зарегистрируйтесь, чтобы добавлять товары в корзину!"
      );
    }
  }

  return (
    <Link to={`/carddetails/${datakey}/${id}`}  className="w-[250px] h-[340px] text-center flex  flex-col justify-between shadow-lg p-4 my-4">
      <div className="flex justify-between items-start">
        <img className="w-[200px] h-[200px]" src={img} alt="" />
        <button onClick={likeProduct}>
          {state ? (
            <img src="/heart-like.png" alt="" />
          ) : (
            <img src="/heart.png" alt="" />
          )}
        </button>
      </div>
      <h2>{title.slice(0, 40)}</h2>
      <div className="flex justify-between">
        <div>
          <p className="text-sm line-through text-slate-400">
            {price * 12200} Сум
          </p>
          <p className="font-semibold">{newPrice * 12200} Сум</p>
        </div>
        <button onClick={addCart}>
          <img src="/icons/cart2-icon.svg" alt="" />
        </button>
      </div>
    </Link>
  );
};
