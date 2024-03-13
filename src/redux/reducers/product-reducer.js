import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState("product") || {
  products: [],
  count: 0,
  totalPrice: 0,
};
const formatPrice = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    totalPrice:(state)=>{
      return {...state, totalPrice:state.products.reduce((a,b)=> a+b.userPrice, 0),}
    },
    ProductLength: (state) => {
      return { ...state, count: state.products.length };
    },
    add: (state, action) => {
      const idadd = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!idadd) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: action.payload.newPrice,
            },
          ],
        };
      }
      return state;
    },
    toggleAnmount: (state, action) => {
      if (action.payload.type === "add") {
        const newProducts = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * item.newPrice,
            };
          }
          return item;
        });
        return { ...state, products: newProducts };
      }
      if (action.payload.type === "remove") {
        const newProducts = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.newPrice,
            };
          }
          return item;
        });
        return { ...state, products: newProducts };
      }
    },
    delet: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});

export const productReducer = product.reducer;
export const { add, delet, ProductLength, toggleAnmount, totalPrice } = product.actions;
