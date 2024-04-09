import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fatchStatusSlice";
import bagSlice from "./bagSlice";
import wishListSlice from "./wishListSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
    wishlist: wishListSlice.reducer
  },
});

export default myntraStore;
