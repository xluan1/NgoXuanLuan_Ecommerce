import { combineReducers } from "redux";
import shopReducer from "./shopping-reducer";

const RootReducer = combineReducers({
    shop: shopReducer,
});

export default RootReducer;