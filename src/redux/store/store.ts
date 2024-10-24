import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/card/cardSlice";
import isSubmited from "../features/isSubmited/isSubmited";


export const store = configureStore({
    reducer: {
        isSubmited: isSubmited,
        card: cardSlice,

    },

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


