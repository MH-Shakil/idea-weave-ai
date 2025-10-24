// themeSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const themeSlice = createSlice({
    name: 'theme',
    initialState: { currentTheme: 'light-theme' }, // Default theme is light
    reducers: {
        setTheme: (state, action) => {
            state.currentTheme = action.payload
        },
    },
})

export const { setTheme } = themeSlice.actions

const persistConfig = {
    key: 'theme',
    storage,
}

const themeReducer = persistReducer(persistConfig, themeSlice.reducer)

export default themeReducer
