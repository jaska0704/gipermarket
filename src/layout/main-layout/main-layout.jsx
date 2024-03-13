import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer/footer";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="mt-[9%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
