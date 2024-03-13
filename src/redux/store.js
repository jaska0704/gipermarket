import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import {
  ProductLength,
  add,
  productReducer,
  delet,
  toggleAnmount,
  totalPrice
} from "./reducers/product-reducer";
import { likeAdd, likedLength, likeDelet, likeReducer } from "./reducers/like-reduser";
import { saveState } from "../config/storage";
const StoreMiddleWere = createListenerMiddleware();

StoreMiddleWere.startListening({
  matcher: isAnyOf(add, delet, toggleAnmount),
  effect: (_, api) => {
    api.dispatch(ProductLength());
    api.dispatch(totalPrice());
  },
});
StoreMiddleWere.startListening({
  matcher: isAnyOf(likeAdd, likeDelet),
  effect: (_, api) => {
    api.dispatch(likedLength());
  },
});


export const store = configureStore({
  reducer: {
    product: productReducer,
    liked: likeReducer
  },
  middleware: (middleware) => middleware().prepend(StoreMiddleWere.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().product);
  saveState("liked", store.getState().liked);
});
