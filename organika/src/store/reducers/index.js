import { combineReducers } from "redux";
import cartCounterReducer  from "./cartCounter";
import todoReducer  from "./todoReducer";
const rootReducer = combineReducers({
    count: cartCounterReducer,
    todos: todoReducer
});

export default rootReducer;