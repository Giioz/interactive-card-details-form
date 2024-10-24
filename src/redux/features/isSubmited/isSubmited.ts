import { createSlice } from "@reduxjs/toolkit"


interface isSubmited {
    isSubmited: boolean
}

const initialState : isSubmited = {
    isSubmited: false
}

export const isSubmitedSlice = createSlice({
    name: 'isSubmited',
    initialState,
    reducers : {
        setIsSubmited : (state) => {
            state.isSubmited = !state.isSubmited
        },
        setFalse : (state) => {
            state.isSubmited = false
        }
    }
})

export const { setIsSubmited, setFalse } = isSubmitedSlice.actions
export default isSubmitedSlice.reducer