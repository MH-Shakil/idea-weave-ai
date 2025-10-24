import { createSlice } from '@reduxjs/toolkit'

interface ApplySettingsState {
    isApplyingSettingsOpen: boolean
}

const initialState: ApplySettingsState = {
    isApplyingSettingsOpen: false,
}

export const applySettingsSlice = createSlice({
    name: 'applySettings',
    initialState,
    reducers: {
        openApplyingSettings: (state) => {
            state.isApplyingSettingsOpen = true
        },
        closeApplyingSettings: (state) => {
            state.isApplyingSettingsOpen = false
        },
    },
})

export const { openApplyingSettings, closeApplyingSettings } =
    applySettingsSlice.actions
export default applySettingsSlice.reducer
