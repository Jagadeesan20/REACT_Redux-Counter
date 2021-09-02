import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCremReducer from "./icecream/iceCreamReducer";


const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCremReducer,
   
})
export default rootReducer