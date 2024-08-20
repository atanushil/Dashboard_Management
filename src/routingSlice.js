import { createSlice } from "@reduxjs/toolkit";

const routingSlice = createSlice({
  name: "routing",
  initialState: {
    currentPath: "/",
  },
  reducers: {
    setCurrentPath(state, action) {
      state.currentPath = action.payload;
    },
  },
});

export const { setCurrentPath } = routingSlice.actions;
export default routingSlice.reducer;
