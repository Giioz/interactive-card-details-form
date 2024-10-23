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
    cardNumber: 0,
    cardDate: {
        mm: 0o0,
        yy: 0o0,
    },
    cvc: 123
}

const initialState: CardState =  {
  
    card: initialInfo
}


export const CardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            state.card = action.payload
        },
        
    },
   

})

export const { addCard } = CardSlice.actions

export default CardSlice.reducer


