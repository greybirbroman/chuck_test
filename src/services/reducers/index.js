import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import loadingReducer from "./loadingReducer";
import paginationReducer from "./paginationReduser";
import randomJokeReducer from "./randomJokeReduser";

export const rootReducer = combineReducers({
    search: searchReducer,
    loading: loadingReducer,
    pagination: paginationReducer,
    randomJoke: randomJokeReducer
})