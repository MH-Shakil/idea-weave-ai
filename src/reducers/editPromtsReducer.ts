import { createSlice } from '@reduxjs/toolkit'

interface EditPromptsState {
    isEditPromptOpen: boolean
}

const initialState: EditPromptsState = {
    isEditPromptOpen: false,
}

export const editPromptsSlice = createSlice({
    name: 'editPrompts',
    initialState,
    reducers: {
        closeEditPrompt: (state) => {
            state.isEditPromptOpen = false
        },
        openEditPrompt: (state) => {
            state.isEditPromptOpen = true
        },
    },
})

export const { closeEditPrompt, openEditPrompt } = editPromptsSlice.actions
export default editPromptsSlice.reducer
