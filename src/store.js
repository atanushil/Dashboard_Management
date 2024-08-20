import { configureStore } from "@reduxjs/toolkit";
import routingReducer from "./routingSlice";

const store = configureStore({
  reducer: {
    routing: routingReducer,
  },
});

export default store;
