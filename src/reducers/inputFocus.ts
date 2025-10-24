import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const focusSlice = createSlice({
    name: 'focus',
    initialState: {
        isInputFocused: false,
    },
    reducers: {
        setInputFocus(state, action: PayloadAction<boolean>) {
            state.isInputFocused = action.payload
        },
    },
})

export const { setInputFocus } = focusSlice.actions

export default focusSlice.reducer
