import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partnerName: "",
};

export const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
    setPartner: (state, action) => ({
      ...state,
      partnerName: action.payload,
    }),
  },
});

export const { setPartner } = partnerSlice.actions;
export default partnerSlice.reducer;
