import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import apiErrorsReducer from "./apiErrorsReducer";
import loadingReducer from "./loadingReducer";
import paginationReducer from "./paginationReduser";
import randomJokeReducer from "./randomJokeReduser";

export const rootReducer = combineReducers({
    search: searchReducer,
    error: apiErrorsReducer,
    loading: loadingReducer,
    pagination: paginationReducer,
    randomJoke: randomJokeReducer
})