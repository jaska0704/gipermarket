import { lazy } from "react";
import  Home  from "../pages/home/home";


const Cart = lazy(() => import("../pages/cart/cart.jsx"));
const Cabinet = lazy(() => import("../pages/cabinet/cabinet.jsx"));
const Oformit = lazy(() => import("../pages/oformit/oformit.jsx"));
const Cards = lazy(() => import("../pages/cards/cards.jsx"));
const CardDetails = lazy(() => import("../pages/card-details/card-details.jsx"));
const Liked = lazy(() => import("../pages/liked/liked.jsx"));

export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <Cart />,
    path: "cart",
  },
  {
    component: <Oformit />,
    path: "oformit",
  },
  {
    component: <Cabinet />,
    path: "cabinet",
  },
  {
    component: <Cards />,
    path: "cards/:datakey",
  },
  {
    component: <CardDetails />,
    path: "carddetails/:datakey/:id",
  },
  {
    component: <Liked />,
    path: "liked",
  },
];