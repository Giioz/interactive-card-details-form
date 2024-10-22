import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface Card {
    cardHolder: string,
    cardNumber: number,
    cardDate: {
        mm: number,
        yy: number,
    },
    cvc: number,
}
interface CardState {
    card : Card | null;
}

export const initialInfo: Card = {
     cardHolder: "Jane Appleseed",
    cardNumber: 0o0,
    cardDate: {
        mm: 0o0,
        yy: 0o0,
    },
    cvc: 123
}

const initialState: CardState =  {
    // cardHolder: "Jane Appleseed",
    // cardNumber: 0o0,
    // cardDate: {
    //     mm: 0o0,
    //     yy: 0o0,
    // },
    // cardCvc: 123
    card: initialInfo
}


export const CardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            // state.cardHolder = action.payload.cardHolder,
            // state.cardNumber = action.payload.cardNumber
            // state.cardDate.mm = action.payload.cardDate.mm
            // state.cardDate.yy = action.payload.cardDate.yy
            // state.cardCvc = action.payload.cardCvc
            state.card = action.payload
        }
    }

})

export const { addCard } = CardSlice.actions

export default CardSlice.reducer


