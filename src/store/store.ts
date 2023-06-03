import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {githubApi} from "./reducer/githab.api";


export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)

})