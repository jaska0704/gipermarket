import React from "react";

export const HeaderBottom = () => {
  return (
    <div className="flex justify-between items-center mt-5 gap-5">
      <img src="/logo.png" alt="logo" />

      <div>
        <button
          className=" px-8 py-3 bg-primary text-[20px]
        leading-[28.9px] flex items-center gap-3 font-normal font-jost"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          <img src="/icons/bar-icon.svg" alt="" />
          Каталог
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-3/12 max-w-5xl ml-[-550px]">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div>
        <label className="input w-[780px] input-bordered flex items-center gap-2 ">
          <input type="text" className="grow" placeholder="Поиск" />
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
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col justify-center items-center">
          <img src="/icons/user-icon.svg" alt="icon-user" />
          <p>Войти</p>
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
