import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});
  
export const wishListActions = wishListSlice.actions;

export default wishListSlice;
