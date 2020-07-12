import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { iceCremeReducer } from "./iceCreme/iceCremeReducer";
import  userReducer  from './user/userReducer'


const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCreme: iceCremeReducer,
    user: userReducer
})
export default rootReducer
