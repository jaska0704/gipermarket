import React from "react";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { likeDelet, likedLength } from "../../redux/reducers/like-reduser";

const Liked = () => {
  const { likeProduct, count } = useSelector((state) => state.liked);
  const { totalPrice, count: count1 } = useSelector((state) => state.product);
  console.log(likeProduct);
  const dispatch = useDispatch();
  const [state, setState] = React.useState(false);

  const likedItems = (data) => {
    dispatch(likeDelet(data));
  };
  const formatPrice = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="min-h-[40vh] flex justify-between">
      <div className="w-full flex flex-wrap gap-4">
        {!likeProduct?.length ? (
          <div className="flex justify-center items-center">
            <img src="/pngwing.png" alt="" />
          </div>
        ) : (
          likeProduct?.map((item) => {
            return (
              <div
                className="w-[350px] p-5 text-center shadow-lg"
                key={item.id}
              >
                <div className="flex justify-between items-start">
                  <img className="w-[80%]" src={item.img} alt="" />
                  <button onClick={() => likedItems(item)}>
                    <img className="w-[20px]" src="/heart-like.png" alt="" />
                  </button>
                </div>
                <h2 className="mt-6">{item.title}</h2>
              </div>
            );
          })
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
        <button className="w-full py-3 bg-primary">Оформить заказ</button>
      </div>
    </div>
  );
};

export default Liked;
