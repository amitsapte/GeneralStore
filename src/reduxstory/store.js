
import { createStore } from "redux";
import activeReducer from "./reducer";

const store=  createStore(activeReducer);

export default store;
