
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import formReducer from "../redux/reducers/formReducer";

const store = configureStore({
  reducer: {
    contacts: formReducer,
  },
  middleware: [...getDefaultMiddleware()]
});

export default store;
