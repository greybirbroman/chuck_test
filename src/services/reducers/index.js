import { combineReducers } from "redux";

import apiErrorsReducer from "./apiErrorsReducer";
import loadingReducer from "./loadingReducer";
//import paginationReducer from "./paginationReduser";
import paginationSlice from "./paginationSlice";

import searchSlice from "./searchSlice";
import randomJokeSlice from "./randomJokeSlice";

export const rootReducer = combineReducers({
    search: searchSlice,
    error: apiErrorsReducer,
    loading: loadingReducer,
    pagination: paginationSlice,
    randomJoke: randomJokeSlice
})