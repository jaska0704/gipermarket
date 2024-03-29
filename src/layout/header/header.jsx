import React from "react";
import { HeaderTop } from "./header-top/header-top";
import { HeaderBottom } from "./header-bottom/header-bottom";

export const Header = () => {
  return (
    <div className=" fixed top-0 left-0 w-full bg-white z-20">
      <div className="container">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </div>
  );
};
