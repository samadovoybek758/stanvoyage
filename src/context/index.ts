import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/index";
import orderModalReducer from "./slice/OpenOrderModal";

export const makeStore = () => {
  return configureStore({
    reducer: {
      orderModal: orderModalReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
