import React from "react";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  toggleAnmount,
  delet,
  add,
} from "../../redux/reducers/product-reducer";
import { loadState } from "../../config/storage";

const Cart = () => {
  const { products, totalPrice, count } = useSelector((state) => state.product);
  console.log(count);
  const [state, setState] = React.useState(false);
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = React.useState(false);
  const productN = loadState("product");

  const likeProducts = () => {
    setState(!state);
  };
  const deletProduct = (id) => {
    dispatch(delet({ id }));
  };
  const increment = (id) => {
    dispatch(toggleAnmount({ type: "add", id }));
  };
  const dicrement = (id) => {
    dispatch(toggleAnmount({ type: "remove", id }));
  };
  const addOformit = () => {

  };
  const formatPrice = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };



  return (
    <div className="min-h-[40vh] flex justify-between">
      <div className="w-full">
        {!products.length ? (
          <div className="flex justify-center items-center">
            <img src="/pngwing.png" alt="" />
          </div>
        ) : (
          products?.map((item) => (
            <div className="flex justify-center items-center" key={item.id}>
              <img className="w-[20%]" src={item.img} alt="" />
              <div className="flex flex-col w-[50%]">
                <div className="flex gap-5 justify-between">
                  <h2>{item.title}</h2>
                  <h2>{formatPrice(item.userPrice * 12450)} Сум</h2>
                </div>
                <div className="flex justify-between ">
                  <div className="flex gap-3">
                    <button onClick={likeProducts}>
                      {state ? (
                        <img
                          className="w-[20px]"
                          src="/heart-like.png"
                          alt=""
                        />
                      ) : (
                        <img className="w-[20px]" src="/heart.png" alt="" />
                      )}
                    </button>
                    <p>В избранное</p>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <FaTrash />{" "}
                    <button onClick={() => deletProduct(item.id)}>
                      Удалить
                    </button>
                  </div>
                  <div className="border">
                    <button
                      onClick={() => increment(item.id)}
                      className="py-1 px-3 bg-slate-400 disabled:bg-[#68272760]"
                      disabled={showBtn || item.userCount === item.count}
                    >
                      +
                    </button>
                    <span className="px-4">{item.userCount}</span>
                    <button
                      className="py-1 px-3 bg-slate-400"
                      disabled={item.userCount === 1}
                      onClick={() => dicrement(item.id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="border w-[30%] h-[400px] p-2">
        <div className="">
          <p className=" font-jost font-medium text-[24px] leading-[36px]">
            В корзине
          </p>
          <p className="font-jost font-medium text-[20px] bg-red-500 text-white p-1">
            Товаров: {count}
          </p>
        </div>
        <h2 className="font-jost text-[36px] font-semibold">
          {formatPrice(totalPrice * 12450)} Сум
        </h2>
        <button onClick={addOformit} className="w-full py-3 bg-primary">
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default Cart;