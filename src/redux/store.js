import { configureStore } from "@reduxjs/toolkit";

import stateSlice from "./features/stateSlice";
import todoSlice from "./features/todoSlice";
import postsSlice from "./features/postsSlice";


export const store = configureStore({
    reducer: {
        state: stateSlice,
        todo: todoSlice,
        posts: postsSlice,
    }
})

