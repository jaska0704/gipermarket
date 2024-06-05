import React from "react";
import { loadState, saveState } from "../../../../config/storage";
import { Link, useNavigate } from "react-router-dom";
import { add } from "../../../../redux/reducers/product-reducer";
import { likeAdd } from "../../../../redux/reducers/like-reduser";
import { useDispatch, useSelector } from "react-redux";

export const CardPhone = (product) => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState(false);
  const [addcart, setAddCart] = React.useState(false);
  const navigate = useNavigate();
  const user = loadState("user");
  const { likeProduct } = useSelector((state) => state.liked);

  const likeHeart = likeProduct.find((item) => {
    return item.id === product.id && item.datakey === product.datakey;
  });
  console.log(state);
  const nolike = () => {
    setState(!state);
    dispatch(likeAdd(product));
    saveState("like", state);
  };
  const addCart = () => {
    if (!user) {
      alert(
        "Пожалуйста, сначала зарегистрируйтесь, чтобы добавлять товары в корзину!"
      );
    } else {
      dispatch(add(product));
      setAddCart(!addcart);
    }
  };
  const getCart = () => {
    navigate("/cart");
  };
  const formatPrice = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
      <div className="w-[250px] h-[340px] text-center flex  flex-col justify-between shadow-lg p-4 my-4">
        <div className="flex justify-between items-start">
          <img className="w-[200px] h-[200px]" src={product.img} alt="" />
          {likeHeart ? (
            <button onClick={likeProduct}>
              <img src="/heart-like.png" alt="" />
            </button>
          ) : (
            <button onClick={nolike}>
              <img src="/heart.png" alt="" />
            </button>
          )}
        </div>
        <Link to={`/carddetails/${product.datakey}/${product.id}`}>
          <h2 className="hover:text-yellow-500">
            {product.title.slice(0, 40)}
          </h2>
        </Link>
        <div className="flex justify-between">
          <div>
            <p className="text-sm line-through text-slate-400">
              {formatPrice(product.price * 12450)} Сум
            </p>
            <p className="font-semibold">
              {formatPrice(product.newPrice * 12450)} Сум
            </p>
          </div>

          {addcart ? (
            <button className="" onClick={getCart}>
              <img src="/icons/ai.svg" alt="" />
            </button>
          ) : (
            <button onClick={addCart}>
              <img src="/icons/cart2-icon.svg" alt="" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
