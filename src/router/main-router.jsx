import { Home } from "../pages/home/home";
import { Cart } from "../pages/cart/cart";
import { Cabinet } from "../pages/cabinet/cabinet";
import { Oformit } from "../pages/oformit/oformit";

export const main_pages = [
    {
        component: <Home/>
    },
    {
        component: <Cart/>,
        path: "card",
    },
    {
        component: <Oformit/>,
        path: "oformit",
    },
    {
        component: <Cabinet/>,
        path: "cabinet",
    },
]