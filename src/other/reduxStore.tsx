import { combineReducers, createStore } from "redux";
import squareReducer from "./squareReducer";
import toolsReducer from "./toolsReducer";

const reducers = combineReducers({
    squareState: squareReducer,
    toolsState: toolsReducer
});

const store = createStore(reducers);

export default store;