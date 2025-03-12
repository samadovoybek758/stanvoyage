import { createSlice } from "@reduxjs/toolkit";

const orderModalSlice = createSlice({
  name: "orderModal",
  initialState: {
    isOpen: false,
    position: { x: 0, y: 0 },
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.position = action.payload; // x, y koordinatalarni saqlaymiz
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = orderModalSlice.actions;
export default orderModalSlice.reducer;
