import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

export const initialState = loadState("liked") || {
    likeProduct: [],
    likeCount: 0,
};


const liked = createSlice({
  name: "liked",
  initialState,
  reducers: {
    likedLength: (state) => {
      return { ...state, count: state.likeProduct.length };
    },
    likeAdd: (state, action) => {
      const likeadd = state.likeProduct.find(
        (item) => item.id === action.payload.id
      );
      if (!likeadd) {
        return {
          ...state,
          likeProduct: [...state.likeProduct,{ ...action.payload}],
        };
      }
      return state;
    },
    likeDelet: (state, action) => {
      return {
        ...state,
        likeProduct: state.likeProduct.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});

export const likeReducer = liked.reducer;
export const {likeAdd, likedLength, likeDelet} = liked.actions