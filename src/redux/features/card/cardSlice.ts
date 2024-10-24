import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface Card {
    cardHolder: string,
    cardNumber: string,
    cardDate: {
        mm: string,
        yy: string,
    },
    cvc: string,
}
interface CardState {
    card : Card | null;
}


export const initialInfo: Card = {
     cardHolder: "Jane Appleseed",
    cardNumber: "0000000000000000",
    cardDate: {
        mm: "00",
        yy: "00",
    },
    cvc: "000"
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


