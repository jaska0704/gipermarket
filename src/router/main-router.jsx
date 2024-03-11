import { Home } from "../pages/home/home";
import { Cart } from "../pages/cart/cart";
import { Cabinet } from "../pages/cabinet/cabinet";
import { Oformit } from "../pages/oformit/oformit";
import { Cards } from "../pages/cards/cards";
import { CardDetails } from "../pages/card-details/card-details";

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
    component: <Cards />,
    path: "cards/:datakey",
  },
  {
    component: <CardDetails />,
    path: "carddetails/:datakey/:id",
  },
];