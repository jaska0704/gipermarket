import React from "react";

export const FooterTop = () => {
  return (
    <div className="py-10 flex gap-[180px]">
      <div className="flex flex-col gap-7 justify-center items-start">
        <img src="/logo.png" alt="logo" />
        <div>
          <a
            href="tel:+99 893 374-66-44"
            className="leading-[30px] font-jost font-medium text-[21px]"
          >
            +99 893 374-66-44
          </a>
          <p className="text-sm font-jost leading-[20px]">справочная служба</p>
        </div>
        <div>
          <a
            href="tel:+99 893 374-66-44"
            className="leading-[30px] font-jost font-medium text-[21px]"
          >
            +99 890 253-77-53
          </a>
          <p className="text-sm font-jost leading-[20px]">интернет-магазин</p>
        </div>
        <div>
          <p className="font-jost font-semibold text-sm leading-[20px]">
            Оставайтесь на связи
          </p>
          <div className="flex gap-5">
            <a href="https://www.facebook.com/?locale=ru_RU">
              <img src="/icons/facebook-icon.svg" alt="icon" />
            </a>
            <a href="https://ok.ru/">
              <img src="/icons/ok-icon.svg" alt="icon" />
            </a>
            <a href="https://vk.com/">
              <img src="/icons/kontakt-icon.svg" alt="icon" />
            </a>
            <a href="https://www.youtube.com/">
              <img src="/icons/youtube-icon.svg" alt="icon" />
            </a>
            <a href="https://www.youtube.com/">
              <img src="/icons/insta-icon.svg" alt="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <p className="text-sm font-jost leading-[20px]">
          Условия обмена и возврата
        </p>
        <p className="text-sm font-jost leading-[20px]">Каталог</p>
        <p className="text-sm font-jost leading-[20px]">О компании</p>
        <p className="text-sm font-jost leading-[20px]">Контакты</p>
        <p className="text-sm font-jost leading-[20px]">Доставка</p>
        <p className="text-sm font-jost leading-[20px]">Оплата</p>
      </div>
      <div className="flex flex-col gap-7">
        <p className="text-sm font-jost leading-[20px]">Клиентам</p>
        <p className="text-sm font-jost leading-[20px]">Личный кабинет</p>
        <p className="text-sm font-jost leading-[20px]">Блог</p>
        <p className="text-sm font-jost leading-[20px]">Обратная связь</p>
      </div>
      <div className="flex flex-col gap-7">
        <p className="text-sm font-jost leading-[20px]">Информация</p>
        <p className="text-sm font-jost leading-[20px]">
          Пользовательское соглашение
        </p>
        <p className="text-sm font-jost leading-[20px]">
          Политика конфиденциальности и оферта
        </p>
      </div>
    </div>
  );
};
