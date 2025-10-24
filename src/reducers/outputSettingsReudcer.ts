import { createSlice } from '@reduxjs/toolkit'

interface OutputSettingsState {
    isOutputSettingsOpen: boolean
}

const initialState: OutputSettingsState = {
    isOutputSettingsOpen: false,
}

export const outputSettingsSlice = createSlice({
    name: 'outputSettings',
    initialState,
    reducers: {
        closeOutputSettings: (state) => {
            state.isOutputSettingsOpen = false
        },
        openOutputSettings: (state) => {
            state.isOutputSettingsOpen = true
        },
    },
})

export const { closeOutputSettings, openOutputSettings } =
    outputSettingsSlice.actions
export default outputSettingsSlice.reducer
