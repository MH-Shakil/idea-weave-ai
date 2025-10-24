import { createSlice } from '@reduxjs/toolkit'

interface CreatePromptsState {
    isCreatePromptOpen: boolean
}

const initialState: CreatePromptsState = {
    isCreatePromptOpen: false,
}

export const createPromptsSlice = createSlice({
    name: 'createPrompts',
    initialState,
    reducers: {
        closeCreatePrompt: (state) => {
            state.isCreatePromptOpen = false
        },
        openCreatePrompt: (state) => {
            state.isCreatePromptOpen = true
        },
    },
})

export const { closeCreatePrompt, openCreatePrompt } =
    createPromptsSlice.actions
export default createPromptsSlice.reducer
