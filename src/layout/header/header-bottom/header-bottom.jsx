import React from "react";
import { useGetData } from "../../../pages/home/service/query/useGetData";
import { Modal } from "../../../components/modal/modal";
import { useModal } from "../../../hook/useModal";
import { saveState, loadState } from "../../../config/storage";
import { Register } from "../register";
import { Login } from "../login";
import { useGetAllData } from "../../../pages/home/service/query/useGetAllData";
import { CardCategory } from "../../../pages/home/components/cards/card-category";
import { Link } from "react-router-dom";

export const HeaderBottom = () => {
  const user = loadState("user");
  const [search, setSearch] = React.useState("");
  const { isOpen, close, open } = useModal();
  const { isOpen: isOpen2, toggle } = useModal();
  const { data } = useGetData();
  const { data: allData } = useGetAllData(search);

  return (
    <div className="flex justify-between items-center my-5 gap-5">
      <Link to={"/"}>
        <img src="/logo.png" alt="logo" />
      </Link>
      <div>
        <button
          onClick={() => {
            return document.getElementById("my_modal_1").showModal();
          }}
          className=" px-8 py-3 bg-primary text-[20px]
        leading-[28.9px] flex items-center gap-3 font-normal font-jost"
        >
          <img src="/icons/bar-icon.svg" alt="" />
          Каталог
        </button>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box  w-11/12 max-w-5xl">
            <div className="flex gap-5 flex-wrap">
              {data?.map((item) => (
                <CardCategory key={item.id} {...item} closeModal={close} />
              ))}
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div>
        <label className="input w-[780px] input-bordered flex items-center gap-2 ">
          <input
            type="text"
            className="grow relative"
            placeholder="Поиск"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div>
          {search.length >= 3 ? (
            <div className="absolute top-[110px] w-[770px] z-20 bg-white w-">
              {allData?.map((item) => {
                return (
                  <div className="flex gap-4 py-2 border ">
                    <img className="w-[40px] h-[40px]" src={item.img} alt="" />
                    <h2>{item.title}</h2>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col justify-center items-center relative">
          <Modal isOpen={isOpen} close={close}>
            {!isOpen2 ? (
              <Register changeModal={toggle} closeModal={close} />
            ) : (
              <Login closeModal={close} />
            )}
            <div className="flex justify-end text-blue-400">
              <button className="" onClick={toggle}>
                {isOpen2 ? "Register" : "Login"}
              </button>
            </div>
          </Modal>

          {user ? (
            <img className="w-[60px]" src="/icons/user-icon.svg" alt="" />
          ) : (
            <div
              className="flex flex-col justify-center items-center"
              onClick={open}
            >
              <img src="/icons/user-icon.svg" alt="icon-user" />
              <button>Войти</button>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src="/icons/heart-icon.svg" alt="icon-user" />
          <p>Избранное</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/icons/cart-icon.svg" alt="icon-user" />
          <p>Корзина</p>
        </div>
      </div>
    </div>
  );
};
