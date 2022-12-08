import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import reducer from "../reducers/index";
import thunk from "redux-thunk";

let store = configureStore (
  { reducer },
  applyMiddleware(thunk)
);

export default store;