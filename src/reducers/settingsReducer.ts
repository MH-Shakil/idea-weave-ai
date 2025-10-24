import { createSlice } from '@reduxjs/toolkit'

interface SettingsState {
    isSettingsOpen: boolean
}

const initialState: SettingsState = {
    isSettingsOpen: false,
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        closeSettings: (state) => {
            state.isSettingsOpen = false
        },
        openSettings: (state) => {
            state.isSettingsOpen = true
        },
    },
})

export const { closeSettings, openSettings } = settingsSlice.actions
export default settingsSlice.reducer
