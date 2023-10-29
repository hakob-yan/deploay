// "use client"

import { configureStore } from "@reduxjs/toolkit";
import { setPartner, partnerSlice } from "./features/partner/partnerSlice";

export const store = configureStore({
  reducer: {
    [partnerSlice.name]: partnerSlice.reducer,
  },
  devTools: true,
});
