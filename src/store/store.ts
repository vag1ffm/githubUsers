import {configureStore} from "@reduxjs/toolkit";
import {githubApi} from "./reducer/githab.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {githubReducer} from "./reducer/githubSlice";


export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        githubReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)

})


setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>